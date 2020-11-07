import store from '@/store'
import * as OF from "@/datascrub/OutputFormatter";

export default class AdaCode {
	constructor(property, data) {
		this.property = property
		this.data = data
	}

	configurations() {
		return store.getters["table_configurations/configuration"](this.property)
	}

	getFormattedValue() {
		let isNumber = this.configurations().isNumber
		let value = this.data

		if (isNumber) {
			value = String(value).trim()

			if (value.length < 4)
				value = OF.padZero(value, 4)

			return `D${value}`
		}

		return String(value) ? value : null
	}
}
