export const configuration = (state) => (column) => state[column]

export const getHeadersWithValues = (state) => {
	return Object.keys(state)
		.filter((key, index) => {
			return state[key]['header'] !== null
		})
}