<template>
    <div class="flex items-center bg-grey-lighter">
        <label class="text-gray-800 w-32 flex flex-col items-center py-2 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 cursor-pointer hover:bg-indigo-600">
            <span class="text-base leading-normal">select a file</span>
            <input type='file' class="hidden" @change="readXlsx"/>
        </label>
    </div>
</template>

<script>
import Excel from 'exceljs/excel'

export default {
    methods: {
        readXlsx(obj) {
            if (!obj.target.files) {
                return
            }

            const f = obj.target.files[0]
            console.log(f)
            const reader = new FileReader()
            reader.readAsArrayBuffer(f)
            reader.onload = () => {
                const buffer = reader.result

                const wb = new Excel.Workbook()

                wb.xlsx.load(buffer).then(workbook => {
                    console.log(workbook, 'workbook instance')
                    console.log(workbook.worksheets[0].columnCount)

                    workbook.worksheets[0].getRow(1).eachCell((cell, index) => {
                        console.log(cell.value)
                    })
                })
            }
        },
    }
}
</script>