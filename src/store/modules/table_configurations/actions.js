export const updateConfiguration = ({commit}, payload) => {
	commit('SET_CONFIGURATION', payload)
}

export const setStringNameHeader = ({commit, state}, payload) => {
	let value = null

	if (payload.value.length > 0)
		value = payload.value

	commit('SET_CONFIGURATION', {column: payload.column, index: 'header', value: value})

	if (state[payload.column]['header'] && state[payload.column]['header'].length < 2)
		commit('SET_CONFIGURATION', {column: payload.column, index: 'valueIsConcat', value: false})
}

export const setStringNameValueIsConcat = ({commit, state}, payload) => {
	commit("SET_CONFIGURATION", {column: payload.column, index: 'valueIsConcat', value: payload.value})
}

export const setStringNameValueFormat = ({commit, state}, payload) => {
	commit("SET_CONFIGURATION", {column: payload.column, index: 'valueFormat', value: payload.value})
}

export const setStringNameFallback = ({commit, state}, payload) => {
	// payload = {index: 'facility'}, value: ['some headers']
	let value = null

	if (payload.value.length > 0)
		value = payload.value

	commit('SET_CONFIGURATION', {column: payload.column, index: 'fallback', value: value})

	if (state[payload.column]['fallback'] && state[payload.column]['fallback'].length < 2)
		commit('SET_CONFIGURATION', {column: payload.column, index: 'fallbackIsConcat', value: false})
}

export const setStringNameFallbackIsConcat = ({commit, state}, payload) => {
	commit("SET_CONFIGURATION", {column: payload.column, index: 'fallbackIsConcat', value: payload.value})
}

export const setStringNameFallbackFormat = ({commit, state}, payload) => {
	commit("SET_CONFIGURATION", {column: payload.column, index: 'fallbackFormat', value: payload.value})
}

export const setAdaCodeIsNumber = ({commit, state}, payload) => {
	commit("SET_CONFIGURATION", {column: payload.column, index: 'isNumber', value: payload.value})
}

export const addNetworkOptions = ({commit, state}, payload) => {
	commit("ADD_NETWORK_OPTIONS", {column: payload.column, index: 'yesValueOptions', value: payload.value})
}

export const reset = ({commit}) => {
	commit('RESET')
}