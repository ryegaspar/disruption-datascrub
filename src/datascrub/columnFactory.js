import StringPaddedNumbers from './StringPaddedNumbers'

const COLUMNS = {
	tin: StringPaddedNumbers,
	npi: StringPaddedNumbers,
	zip: StringPaddedNumbers
}

export default class ColumnFactory {
	static createInstance(columnName, dataByHeader) {
		const cellFormatter = COLUMNS[columnName]

		const cell = cellFormatter ? new cellFormatter(columnName, dataByHeader) : null

		return cell
	}
}