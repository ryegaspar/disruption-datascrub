export const SET_CONFIGURATION = (state, payload) => {
	state[payload.column][payload.index] = payload.value
}

export const RESET = (state) => {
	state.tin.header = null
	state.tin.direction = 'right'
	state.tin.characters = 9

	state.npi.header = null
	state.npi.direction = 'right'
	state.npi.characters = 10

	state.facility.header = null
	state.facility.valueIsConcat = false
	state.facility.valueFormat = 'fn-ln'
	state.facility.fallback = null
	state.facility.fallbackIsConcat = false
	state.facility.fallbackFormat = 'fn-ln'

	state.name.header = null
	state.name.valueIsConcat = false
	state.name.valueFormat = 'fn-ln'
	state.name.fallback = null
	state.name.fallbackIsConcat = false
	state.name.fallbackFormat = 'fn-ln'

	state.add1.header = null
	state.add2.header = null
}