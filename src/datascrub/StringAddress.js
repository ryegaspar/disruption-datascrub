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
		let value = this.data.filter(i => i !== null).map(i => String(i))
		let isAddress = this.configurations().isAddress;

		return OF.getAddressFromArray(value, isAddress)
	}
}
