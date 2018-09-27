import { CHANGE_SEARCHFIELD } from './constants'

export const setSearchfield = (text) => {
	console.log(text)
	return ({
		type: CHANGE_SEARCHFIELD,
		payload: text
	})
}
