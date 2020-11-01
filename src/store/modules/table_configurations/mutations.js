export const SET_CONFIGURATION = (state, payload) => {
	state[payload.column][payload.index] = payload.value
}