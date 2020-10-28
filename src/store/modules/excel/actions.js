import Excel from 'exceljs/excel'

export const readFile = ({commit, dispatch}, file) => {
	commit('SET_FILE', file)

	const reader = new FileReader()
	reader.readAsArrayBuffer(file)
	reader.onload = () => {
		const buffer = reader.result

		const wb = new Excel.Workbook()

		wb.xlsx.load(buffer).then(workbook => {
			console.log(workbook.worksheets[0].columnCount)

			workbook.worksheets[0].getRow(1).eachCell((cell, index) => {
				console.log(cell.value)
			})
		})
	}
}

export const updateFile = ({commit}, file) => {
	// commit()
}