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

			let rowCount = workbook.worksheets[0].rowCount
			commit('SET_NUM_OF_ROWS',  rowCount - 1)

			let data = []
			for (let x = 2; x <= rowCount; x++) {
				let celldata = []
				workbook.worksheets[0].getRow(x).eachCell({includeEmpty: true},(cell, index) => {
					celldata.push(cell.value)
				})
				data.push(celldata)
			}

			commit('SET_DATA', data)
		})

		commit('SET_HEADERS', headers)
	}
}