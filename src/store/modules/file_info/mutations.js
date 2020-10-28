export const SET_FILE = (state, file) => {
	state.file = file
	state.filename = file.name
	state.filePath = file.path
}
