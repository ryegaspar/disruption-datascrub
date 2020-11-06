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
	zip: {
		header: null,
		direction: 'left',
		characters: 5,
	}
}