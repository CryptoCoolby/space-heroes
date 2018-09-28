import { CHANGE_SEARCHFIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED } from './constants'

export const setSearchfield = (text) => {
	return ({
		type: CHANGE_SEARCHFIELD,
		payload: text
	})
}

export const requestRobots = () => (dispatch) => {
	dispatch({ type: REQUEST_ROBOTS_PENDING })
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
		.catch(e => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: e }))
}
