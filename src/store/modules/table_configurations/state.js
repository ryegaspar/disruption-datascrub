export default {
	tin: {
		header: null,
		format: 'text-right',
		characters: 9,
		type: String
	},
	npi: {
		header: null,
		format: 'text-right',
		characters: 10,
		type: String
	},
	facility: {
		header: null,
		columnFormat: 'fn-ln',
		fallback: null,
		fallbackFormat: 'fn-ln',
		ignoreAddress: true,
		ignoreAddress2: true
	},
	name: {
		header: null,
		columnFormat: 'fn-ln',
		fallback: null,
		fallbackFormat: 'fn-ln',
		ignore_address: true,
		ignore_address_2: true
	},
	zip: {
		header: null,
		format: 'text-left',
		characters: 5,
		type: String
	}
}