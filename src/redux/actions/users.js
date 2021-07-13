import { apiCall } from '../../services/api'
import { GET_USER, SET_CURRENT_USER } from '../actionTypes'
import { addError } from '../actions/error'
import { setAuthorizationTokenHeader,logout } from './auth'

export const getUser = user => ({ type: GET_USER, user })
export const edit = user => ({ type: SET_CURRENT_USER, user })

export function getUserById(user_id) {
	return dispatch => {
		return apiCall('get', `/api/users/${user_id}`)
			.then(res => {
				dispatch(getUser(res))
			})
			.catch(err => dispatch(addError(err.message)))
	}
}

export function editProfile(new_user) {
	return (dispatch, getState) => {
		let { currentUser } = getState()
		const { id } = currentUser.user
		return apiCall('put', `/api/users/${id}/edit`, new_user)
			.then(({ NewUser, token }) => {
				localStorage.setItem('jwtTokenv2v', token)
				setAuthorizationTokenHeader(token)
				dispatch(edit(NewUser))
			})
			.catch(err => dispatch(addError(err.message)))
	}
}

export function editUsersAfterReview(reviewed_id, user_id, review) {
	return dispatch => {
		return apiCall('put', `/api/users/review/${reviewed_id}/${user_id}`, review)
			.then(res => console.log(res))
			.catch(err => dispatch(addError(err.message)))
	}
}



export const getSocialForUser = async userId => {
	return await apiCall('get', `/api/auth/${userId}/getsocials`)
}

export const updateSocialForUser = async (userId, socials) => {
	return await apiCall('post', `/api/auth/${userId}/updatesocials`, socials)
}
export const deleteUser = () => async (dispatch, getState) => {
	let { currentUser } = getState()
	const { id } = currentUser.user
	if (id)
		return apiCall('delete', `/api/users/${id}/edit`)
			.then(res => dispatch(logout()))
			.catch(err => dispatch(addError(err?.message)))
	else return
}