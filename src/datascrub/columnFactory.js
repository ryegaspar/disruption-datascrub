import StringPaddedNumbers from './StringPaddedNumbers'

const COLUMNS = {
	tin: StringPaddedNumbers,
	npi: StringPaddedNumbers,
	zip: StringPaddedNumbers
}

export default class ColumnFactory {
	static createInstance(columnName, configuration) {
		const cellFormatter = COLUMNS[columnName]

		const cell = cellFormatter ? new cellFormatter(columnName, configuration) : null

		return cell
	}
}