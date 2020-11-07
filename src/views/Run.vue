<template>
    <div>
        <div class="flex items-center bg-grey-lighter">
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 bg-indigo-400 hover:bg-indigo-600 mr-2 focus:outline-none"
                @click.prevent="processFile"
            >
                Run
            </button>
        </div>

        <hr class="border-b-2 border-gray-900 mt-20 mb-2">
        <div class="text-gray-600" v-if="statusText.length > 0">
            <p class="mb-4">Status</p>
            <p class="text-gray-300" v-for="s in statusText">{{ s }}</p>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import fs from 'fs'
import * as Excel from 'exceljs'
import ColumnFactory from "@/datascrub/columnFactory"

export default {
    data() {
        return {
            newData: [],
            isBusy: false,
            statusText: [],
            newFilename: ''
        }
    },

    methods: {
        processFile() {
            if (!this.filePath) {
                Swal.fire({
                    title: 'Error',
                    text: 'No file defined',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                })
                return
            }

            this.newFilename = this.filePath.slice(0, -5) + ' - autogen.xlsx'

            this.generateData()
        },

        generateData() {
            this.statusText = []
            this.isBusy = true

            this.statusText.push('generating data...')

            this.newData = this.tableData.map((item, index) => {
                let n = new Object()
                n['id'] = index + 1

                this.headersWithValues.forEach((h) => {
                    let header = null
                    let fallback = null

                    if (Array.isArray(this.configurations(h).header))
                        header = this.configurations(h).header.map(i => item[i])
                    else
                        header = item[this.configurations(h).header]

                    if (this.configurations(h).hasOwnProperty('fallback')) {
                        if (this.configurations(h).fallback)
                            fallback = this.configurations(h).fallback.map(i => item[i])
                    }

                    return n[h] = (ColumnFactory.createInstance(h, header, fallback)).getFormattedValue()
                })

                return n
            })

            this.$set(this.statusText, this.statusText.length - 1, 'generating data....done')

            // console.log(this.newData)
            this.isBusy = false
            this.writeToExcel()
        },

        writeToExcel() {
            this.isBusy = true
            this.statusText.push('creating excel...')

            let workbook = new Excel.Workbook()
            let worksheet = workbook.addWorksheet('Sheet1')

            let columns = []
            columns.push({'header': 'ID', 'key': 'id'})

            this.headersWithValues.forEach((h) => {
                let o = new Object()
                o['header'] = h.toUpperCase()
                o['key'] = h
                columns.push(o)
            })

            worksheet.columns = columns
            // worksheet.columns.forEach(column => {
            //     column.width = column.header.length < 12 ? 12 : column.header.length
            // })

            this.newData.forEach((e, index) => {
                const rowIndex = index + 2

                worksheet.addRow({
                    ...e
                })
            })
            worksheet.state = 'visible'

            const stream = fs.createWriteStream(this.newFilename)

            stream.on('error', (e) => {
                Swal.fire({
                    title: 'Error',
                    text: `Error: ${e.message}`,
                    icon: 'error',
                    confirmButtonText: 'Ok',
                })
            })

            stream.on('ready', async () => {
                await workbook.xlsx.write(stream)
                stream.end()

                this.$set(this.statusText, this.statusText.length - 1, 'creating excel....done')
            })
        }
    },

    computed: {
        ...mapGetters({
            filePath: 'excel/filePath',
            tableData: 'excel/data',
            headersWithValues: 'table_configurations/getHeadersWithValues',
            configurations: 'table_configurations/configuration'
        })
    }
}
</script>