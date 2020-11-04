export default {
	tin: {
		header: null,
		direction: 'right',
		characters: 9,
	},
	npi: {
		header: null,
		direction: 'right',
		characters: 10,
	},
	facility: {
		header: null,
		valueIsConcat: false,
		valueFormat: 'fn-ln',
		fallback: null,
		fallbackIsConcat: false,
		fallbackFormat: 'fn-ln',
		isName: false,
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
		direction: 'left',
		characters: 5,
	}
}