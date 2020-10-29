export const SET_FILE = (state, file) => {
	state.file = file
	state.filename = file.name.toLowerCase()
	state.filePath = file.path.toLowerCase()
}

export const SET_HEADERS = (state, headers) => {
	state.headers = headers
}

export const SET_NUM_OF_ROWS = (state, numOfRows) => {
	state.dataRows = numOfRows
}

export const SET_DATA = (state, data) => {
	state.data = data
}