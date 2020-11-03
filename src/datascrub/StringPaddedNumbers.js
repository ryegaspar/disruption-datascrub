import store from '@/store'

export default class StringPaddedNumbers {
	constructor(property, data) {
		this.property = property
		this.data = data
	}

	configurations() {
		return store.getters["table_configurations/configuration"](this.property)
	}

	getFormattedValue() {
		let value = this.data
		let numOfCharacters = this.configurations().characters;

		value = String(value).trim().split("-", 1)

		if (value.length < numOfCharacters) {
			value = this.padZero(value)
		}

		if (this.configurations().direction === 'right')
			value = value.split("").reverse().join("").substring(0,numOfCharacters).split("").reverse().join("")
		else
			value = value.substring(0,numOfCharacters)

		return value
	}

	padZero(n) {
		n = n + ''
		let width = this.configurations().characters
		return new Array(width - n.length + 1).join('0') + n
	}
}
