import Excel from 'exceljs/excel'

function checkArrayDuplicate(array) {
	return new Set(array).size !== array.length
}

export const readFile = ({commit}, file) => {
	const reader = new FileReader()
	reader.readAsArrayBuffer(file)
	reader.onload = () => {
		const buffer = reader.result
		const wb = new Excel.Workbook()
		let headers = []

		wb.xlsx.load(buffer).then(workbook => {
			workbook.worksheets[0].getRow(1).eachCell((cell, index) => {
				headers.push(cell.value.toLowerCase())
			})

			if (checkArrayDuplicate(headers)) {
				console.log('headers have duplicate values')
				return
			}

			console.log('headers are good')
			commit('SET_FILE', file)

			commit('SET_HEADERS', headers)

			let rowCount = workbook.worksheets[0].rowCount
			commit('SET_NUM_OF_ROWS',  rowCount - 1)

			let data = []
			for (let x = 2; x <= rowCount; x++) {
				let celldata = {}
				workbook.worksheets[0].getRow(x).eachCell({includeEmpty: true},(cell, index) => {
					celldata[headers[index - 1]] = cell.value
				})
				data.push(celldata)
			}
			commit('SET_DATA', data)
		})
	}
}