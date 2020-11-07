export const SET_CONFIGURATION = (state, payload) => {
	state[payload.column][payload.index] = payload.value
}

export const ADD_NETWORK_OPTIONS = (state, payload) => {
	state[payload.column][payload.index].push(payload.value)
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

	state.city.header = null
	state.state.header = null
	state.zip.header = null

	state.claims.header = null
	state.claimants.header = null
	state.procedures.header = null
	state.billed.header = null

	state.ada_code.header = null

	state.network1.header = null
	state.network1.yesValues = []
	state.network1.yesValueOptions = []

	state.network2.header = null
	state.network2.yesValues = []
	state.network2.yesValueOptions = []

	state.network3.header = null
	state.network3.yesValues = []
	state.network3.yesValueOptions = []
}