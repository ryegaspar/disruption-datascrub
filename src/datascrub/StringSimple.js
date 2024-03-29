import store from '@/store'

export default class StringSimple {
	constructor(property, data) {
		this.property = property
		this.data = data
	}

	configurations() {
		return store.getters["table_configurations/configuration"](this.property)
	}

	getFormattedValue() {
		return String(this.data).trim().toUpperCase()
	}
}
