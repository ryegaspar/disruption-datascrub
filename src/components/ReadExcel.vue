<template>
    <div>
        <input type="file" @change="readXlsx"/>
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