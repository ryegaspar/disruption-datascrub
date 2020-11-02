import store from '@/store'

export default class StringPaddedNumbers {
	constructor(property, data) {
		this.property = property // header, "tin"
		this.data = data // value map from exceldata[0][table_configuration[tin][header]]
	}

	configurations() {
		return store.getters["table_configurations/configuration"](this.property)
	}

	getFormattedValue() {
		let value = this.data

		value = String(value).trim().replace(/-/g,'')

		if (value.length < this.configurations().characters) {
			value = this.padZero(value)
		}

		if (this.configurations().format === 'text-right')
			value = value.split("").reverse().join("").substring(0,9).split("").reverse().join("")
		else
			value = value.substring(0,9)

		return value
	}

	padZero(n) {
		n = n + ''
		let width = this.configurations().characters
		return new Array(width - n.length + 1).join('0') + n
	}
}
