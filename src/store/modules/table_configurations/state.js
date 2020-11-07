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
		valueIsConcat: false,
		valueFormat: 'fn-ln',
		fallback: null,
		fallbackIsConcat: false,
		fallbackFormat: 'fn-ln',
		isName: true,
		ignoreAddress: true,
		ignoreAddress2: true
	},
	add1: {
		header: null,
		isAddress: true
	},
	add2: {
		header: null,
		isAddress: false
	},
	city: {
		header: null
	},
	state: {
		header: null
	},
	zip: {
		header: null,
		direction: 'left',
		characters: 5,
	},
	claims: {
		header: null
	},
	claimants: {
		header: null
	},
	procedures: {
		header: null
	},
	billed: {
		header: null
	},
	ada_code: {
		header: null,
		isNumber: true
	}
}