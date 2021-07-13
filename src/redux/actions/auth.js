import { apiCall, setTokenHeader } from '../../services/api'
import {
	SET_CURRENT_USER,
	SET_STATS,
	SET_UPCOMING,
	PASSWORD_NEEDED
} from '../actionTypes'
import { addError, removeError } from './error'

export function setCurrentUser(user = {}) {
	return { type: SET_CURRENT_USER, user }
}

export function updateStats(stats) {
	return { type: SET_STATS, stats }
}
export function updateUpcoming(upcoming) {
	return { type: SET_UPCOMING, upcoming }
}

export function setPasswordHighlight(payload) {
	return { type: PASSWORD_NEEDED, payload }
}

export function logout() {
	return dispatch => {
		localStorage.removeItem('jwtTokenv2v')
		setAuthorizationTokenHeader(false)
		dispatch(setCurrentUser())
	}
}

export function setAuthorizationTokenHeader(token) {
	setTokenHeader(token)
}

export function authUser(methods, userData, type = 'signup') {
	return (dispatch, getState) => {
		//wrap our thunk in a promise so we can wait for the API call to resolve
		let inviter = localStorage.getItem('inviter')
		if (type === 'signup' && inviter)
			userData = { ...userData, invitedBy: JSON.parse(inviter) }
		console.log({ type })
		return new Promise((resolve, reject) => {
			let method = methods === 'edit' ? 'put' : 'post'
			return apiCall(method, `/api/auth/${type}`, userData) //send the request to the API with the user data from the form and type wich is signup or signin
				.then(({ token, ...user }) => {
					// we deconstruct the Token  and user from the response
					localStorage.setItem('jwtTokenv2v', token) //save the token to session storage
					setAuthorizationTokenHeader(token)
					dispatch(setCurrentUser(user)) //updating redux that someone logge in +the user that currently logged in
					dispatch(removeError()) //if the server was withou Error so remove any error from this redux state
					if (user.pass > 1) {
						dispatch(setPasswordHighlight(false))
					}

					resolve() //indicate the API call sucess
				})
				.catch(err => {
					console.log('this is where we are failing', err)
					dispatch(addError(err?.message)) //if we got an err from the server save it to the redux state fot presenting
					reject() //indicate the API call fail
				})
		})
	}
}

export function getStats(user_id) {
	return dispatch => {
		if (user_id)
			return apiCall('get', `/api/users/${user_id}/stats`)
				.then(stats => dispatch(updateStats(stats)))
				.catch(err => dispatch(addError(err?.message)))
		else return
	}
}

export function getUpComing(user_id) {
	return dispatch => {
		if (user_id)
			return apiCall('get', `/api/users/${user_id}/upcoming`)
				.then(upcoming => dispatch(updateUpcoming(upcoming)))
				.catch(err => dispatch(addError(err?.message)))
		else return
	}
}



export function resetPassword(email) {
	return async function (dispatch) {
		apiCall('post', `/api/auth/resetPassword`, { email })
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}
}

export function resetUserPassword({ token, password }) {
	return function (dispatch) {
		apiCall('put', `/api/auth/resetPassword`, { token, password })
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}
}
