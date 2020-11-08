import store from '@/store'
import * as OF from './OutputFormatter'

export default class StringName {
	constructor(property, value, fallback) {
		this.property = property
		this.value = value
		this.fallback = fallback
	}

	configurations() {
		return store.getters["table_configurations/configuration"](this.property)
	}

	getFormattedValue() {
		let value = this.value.filter(i => i !== null)
		let fallback = this.fallback ? this.fallback.filter(i => i !== null) : null

		const valueFormat = this.configurations().valueFormat
		const valueIsConcat = this.configurations().valueIsConcat
		const fallbackIsConcat = this.configurations().fallbackIsConcat
		const fallbackFormat = this.configurations().fallbackFormat
		const isName = this.configurations().isName

		value = value.length === 0 ? null : value
		fallback = fallback && fallback.length === 0 ? null : fallback

		let output = null

		if (value) {
			if (value.length === 1 && valueFormat === 'ln-fn') {
				output = value.map(i => String(i))
				output = OF.reverseNameToStandard(value, true)
			}

			if (value.length === 1 && valueFormat === 'fn-ln') {
				value = String(value[0]).trim()
				if (!OF.isAddress(String(value[0]).trim()) && !OF.isAddress2(String(value[0]).trim()))
					output = String(value[0]).trim()
				else
					output = null
			}

			if (value.length > 1 && valueIsConcat) {
				output = OF.concatenate(value, true)
			}

			if (value.length > 1 && !valueIsConcat) {
				output = OF.evaluateIndividual(value, true)
			}
		}

		if (!output && fallback) {
			if (fallback.length === 1 && fallbackFormat === 'ln-fn') {
				output = OF.reverseNameToStandard(fallback, false)
			}

			if (fallback.length === 1 && fallbackFormat === 'fn-ln') {
				output = fallback[0].trim()
			}

			if (fallback.length > 1 && fallbackIsConcat) {
				output = OF.concatenate(fallback, false)
			}

			if (fallback.length > 1 && !fallbackIsConcat) {
				output = OF.evaluateIndividual(fallback, false)
			}
		}

		if (isName) {
			return OF.formatName(output)
		}

		if (output) {
			return String(output).trim().toUpperCase()
		}

		return output
	}
}
