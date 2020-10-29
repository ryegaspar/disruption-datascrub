import Excel from 'exceljs/excel'

export const readFile = ({commit, dispatch}, file) => {
	commit('SET_FILE', file)

	const reader = new FileReader()
	reader.readAsArrayBuffer(file)
	reader.onload = () => {
		const buffer = reader.result
		const wb = new Excel.Workbook()
		let headers = []

		wb.xlsx.load(buffer).then(workbook => {
			workbook.worksheets[0].getRow(1).eachCell((cell, index) => {
				headers.push(cell.value)
			})

			commit('SET_NUM_OF_ROWS', workbook.worksheets[0].rowCount - 1)
		})

		commit('SET_HEADERS', headers)
	}
}