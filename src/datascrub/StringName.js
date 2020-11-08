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

		// when VALUE len = 1, and format = ln-fn
		if (value && value.length === 1 && valueFormat === 'ln-fn') {
			value = value.map(i => String(i))
			value = OF.reverseNameToStandard(value, true)
		}

		// when VALUE len = 1, and format = fn-ln
		if (value && value.length === 1 && valueFormat === 'fn-ln') {
			if (!OF.isAddress(String(value[0]).trim()) && !OF.isAddress2(String(value[0]).trim()))
				value = String(value[0]).trim()
			else
				value = null
		}

		// when VALUE len > 1, and isConcat = true
		if (value && value.length > 1 && valueIsConcat) {
			value = OF.concatenate(value, true)
		}

		// when VALUE len > 1, and isConcat = false
		if (value && value.length > 1 && !valueIsConcat) {
			value = OF.evaluateIndividual(value, true)
		}

		// when FALLBACK len = 1, and format = ln-fn
		if (!value && fallback && fallback.length === 1 && fallbackFormat === 'ln-fn') {
			value = OF.reverseNameToStandard(fallback, false)
		}

		// when FALLBACK len = 1, and format = fn-ln
		if (!value && fallback && fallback.length === 1 && fallbackFormat === 'fn-ln') {
			value = fallback[0].trim()
		}

		// when FALLBACK len > 1, and isConcat = true
		if (!value && fallback && fallback.length > 1 && fallbackIsConcat) {
			value = OF.concatenate(fallback, false)
		}

		// when FALLBACK len > 1, and isConcat = false
		if (!value && fallback && fallback.length > 1 && !fallbackIsConcat) {
			value = OF.evaluateIndividual(fallback, false)
		}

		if (isName) {
			return OF.formatName(value)
		}

		if (value) {
			return value.trim().toUpperCase()
		}

		return value
	}
}
