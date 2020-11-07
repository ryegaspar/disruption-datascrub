import store from '@/store'

export default class Network {
	constructor(property, data) {
		this.property = property
		this.data = data
	}

	configurations() {
		return store.getters["table_configurations/configuration"](this.property)
	}

	getFormattedValue() {
		const yesValues = this.configurations().yesValues

		return yesValues.includes(this.data.trim().toLowerCase()) ? 'Y': 'N'
	}
}
