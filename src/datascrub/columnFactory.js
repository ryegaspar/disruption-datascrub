import StringPaddedNumbers from '@/datascrub/StringPaddedNumbers'
import StringName from "@/datascrub/StringName"
import StringAddress from "@/datascrub/StringAddress"
import StringSimple from "@/datascrub/StringSimple"
import NumberSimple from "@/datascrub/NumberSimple"
import AdaCode from "@/datascrub/AdaCode"

const COLUMNS = {
	tin: StringPaddedNumbers,
	npi: StringPaddedNumbers,
	facility: StringName,
	name: StringName,
	add1: StringAddress,
	add2: StringAddress,
	city: StringSimple,
	state: StringSimple,
	zip: StringPaddedNumbers,
	claims: NumberSimple,
	claimants: NumberSimple,
	procedures: NumberSimple,
	billed: NumberSimple,
	ada_code: AdaCode
}

export default class ColumnFactory {
	static createInstance(columnName, dataOnHeader, dataOnFallback = null) {
		const cellFormatter = COLUMNS[columnName]

		const cell = cellFormatter ? new cellFormatter(columnName, dataOnHeader, dataOnFallback) : null

		return cell
	}
}