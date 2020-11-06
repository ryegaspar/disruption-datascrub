import StringPaddedNumbers from './StringPaddedNumbers'
import StringName from "@/datascrub/StringName";

const COLUMNS = {
	tin: StringPaddedNumbers,
	npi: StringPaddedNumbers,
	facility: StringName,
	name: StringName,
	zip: StringPaddedNumbers
}

export default class ColumnFactory {
	static createInstance(columnName, dataOnHeader, dataOnFallback = null) {
		const cellFormatter = COLUMNS[columnName]

		const cell = cellFormatter ? new cellFormatter(columnName, dataOnHeader, dataOnFallback) : null

		return cell
	}
}