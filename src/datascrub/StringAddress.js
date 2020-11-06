import store from '@/store'
import * as OF from './OutputFormatter'

export default class StringAddress {
	constructor(property, data) {
		this.property = property
		this.data = data
	}

	configurations() {
		return store.getters["table_configurations/configuration"](this.property)
	}

	getFormattedValue() {
		let value = this.data.filter(i => i !== null)
		let isAddress = this.configurations().isAddress;

		return OF.getAddressFromArray(value, isAddress)
		// value = String(value).trim().split("-", 1)
		//
		// if (value.length < numOfCharacters) {
		// 	value = this.padZero(value)
		// }
		//
		// if (this.configurations().direction === 'right')
		// 	value = value.split("").reverse().join("").substring(0,numOfCharacters).split("").reverse().join("")
		// else
		// 	value = value.substring(0,numOfCharacters)
		//
		// return value
	}
}
