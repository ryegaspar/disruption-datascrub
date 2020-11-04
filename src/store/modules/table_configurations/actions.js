export const updateConfiguration = ({commit}, payload) => {
	commit('SET_CONFIGURATION', payload)
}

export const setStringNameHeader = ({commit, state}, payload) => {
	// payload = {index: 'facility'}, value: ['some headers']
	let value = null

	if (payload.value.length > 0)
		value = payload.value

	commit('SET_CONFIGURATION', {column: payload.index, index: 'header', value: value})

	if (state[payload.index]['header'] && state[payload.index]['header'].length < 2)
		commit('SET_CONFIGURATION', {column: payload.index, index: 'valueIsConcat', value: false})
}

export const setStringNameValueIsConcat = ({commit, state}, payload) => {
	commit("SET_CONFIGURATION", {column: payload.index, index: 'valueIsConcat', value: payload.value})
}

export const setStringNameValueFormat = ({commit, state}, payload) => {
	commit("SET_CONFIGURATION", {column: payload.index, index: 'valueFormat', value: payload.value})
}

export const setStringNameFallback = ({commit, state}, payload) => {
	// payload = {index: 'facility'}, value: ['some headers']
	let value = null

	if (payload.value.length > 0)
		value = payload.value

	commit('SET_CONFIGURATION', {column: payload.index, index: 'fallback', value: value})

	if (state[payload.index]['fallback'] && state[payload.index]['fallback'].length < 2)
		commit('SET_CONFIGURATION', {column: payload.index, index: 'fallbackIsConcat', value: false})
}

export const setStringNameFallbackIsConcat = ({commit, state}, payload) => {
	commit("SET_CONFIGURATION", {column: payload.index, index: 'fallbackIsConcat', value: payload.value})
}

export const setStringNameFallbackFormat = ({commit, state}, payload) => {
	commit("SET_CONFIGURATION", {column: payload.index, index: 'fallbackFormat', value: payload.value})
}