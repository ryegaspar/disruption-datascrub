<template>
    <div class="home">
        <div class="flex items-center bg-grey-lighter">
            <div>
                <label
                    class="text-gray-800 w-32 flex flex-col items-center py-2 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 cursor-pointer hover:bg-indigo-600">
                    <span class="text-base leading-normal">select a file</span>
                    <input type='file'
                           class="hidden"
                           @change="readXlsx"
                           ref="excelFile"
                    />
                </label>
            </div>
            <div class="ml-2">
                <button class="bg-red-400 px-4 py-2 rounded-lg hover:bg-red-500 outline-none focus:outline-none"
                        @click="resetInput"
                        v-show="filePath"
                >
                    reset file
                </button>
            </div>
        </div>

        <hr class="border-b-2 border-gray-900 mt-6 mb-2">
        <div class="text-gray-600">
            <p class="mb-4">File Info</p>
            <p>Filename: <span class="text-gray-300">{{ filename }}</span></p>
            <p>Path: <span class="text-gray-300">{{ filePath }}</span></p>
            <p>Headers: <span class="text-gray-300">{{ headers.join(', ') }}</span></p>
            <p>Number of Data (rows): <span class="text-gray-300">{{ dataRows }}</span></p>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import * as Excel from 'exceljs/excel'

function checkArrayDuplicate(array) {
    return new Set(array).size !== array.length
}

export default {
    methods: {
        ...mapActions({
            resetExcel: 'excel/reset',
            resetConfigurations: 'table_configurations/reset'
        }),

        ...mapMutations({
            setFile: "excel/SET_FILE",
            setHeaders: "excel/SET_HEADERS",
            setNumOfRows: "excel/SET_NUM_OF_ROWS",
            setData: "excel/SET_DATA"
        }),

        resetInput() {
            Swal.fire({
                title: 'reset',
                text: 'Are you sure you want to reset? This action will also reset configurations',
                showCancelButton: true,
                confirmButtonText: 'reset'
            }).then(r => {
                if (r.isConfirmed) {
                    this.resetExcel()
                    this.resetConfigurations()
                }
            })
        },

        readXlsx(obj) {
            if (!obj.target.files) {
                return
            }

            const reader = new FileReader()
            reader.readAsArrayBuffer(obj.target.files[0])
            reader.onload = () => {
                const buffer = reader.result
                const wb = new Excel.Workbook()
                let headers = []

                wb.xlsx.load(buffer).then(workbook => {
                    workbook.worksheets[0].getRow(1).eachCell((cell, index) => {
                        headers.push(cell.value.toLowerCase().trim())
                    })

                    if (checkArrayDuplicate(headers)) {

                        Swal.fire({
                            title: 'Error',
                            text: 'There are duplicate values on the headers',
                            icon: 'error',
                            confirmButtonText: 'Ok',
                        })

                        this.$refs.excelFile.value = null
                        return
                    }

                    this.setFile(obj.target.files[0])

                    this.setHeaders(headers)

                    let rowCount = workbook.worksheets[0].rowCount
                    this.setNumOfRows(rowCount - 1)

                    let data = []
                    for (let x = 2; x <= rowCount; x++) {
                        let celldata = {}
                        workbook.worksheets[0].getRow(x).eachCell({includeEmpty: true}, (cell, index) => {
                            celldata[headers[index - 1]] = cell.value
                        })
                        data.push(celldata)
                    }
                    this.setData(data)
                })
            }
        },
    },

    computed: {
        ...mapGetters({
            filename: 'excel/filename',
            filePath: 'excel/filePath',
            headers: 'excel/headers',
            dataRows: 'excel/dataRows'
        }),
    }
}
</script>
