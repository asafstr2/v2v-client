import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes'

export const addError = errors => dispatch => {
	setTimeout(() => {
		dispatch({ type: ADD_ERROR, errors: '' })
	}, 1000)
	dispatch({ type: ADD_ERROR, errors })
}
export const removeError = () => ({
	type: REMOVE_ERROR
})
