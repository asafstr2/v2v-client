import React, { useEffect } from 'react'
import { initFacebookSdk } from './initFacebookSdk'
import { ReactComponent as FacebookIcon } from '../../icons/FacebookIcon.svg'
import Box from '@material-ui/core/Box'
import axios from 'axios'
import { authUser } from '../../store/actions/auth'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { setPasswordHighlight } from '../../store/actions/auth'
export default function Facebook({
	setstate,
	state,
	handleSubmit,
	extended,
	authType
}) {
	const dispatch = useDispatch()
	const history = useHistory()
	const setSucess = errors =>
		dispatch({
			type: 'ADD_ERROR',
			errors,
			severity: 'success'
		})
	const setErr = errors =>
		dispatch({
			type: 'ADD_ERROR',
			errors,
			severity: 'error'
		})

	let auth = form => {
		try {
			if (
				authType === 'signup' &&
				(!state.password || state.password.length <= 4)
			) {
				dispatch(setPasswordHighlight(true))
				
			}
			dispatch(
				authUser(
					'post',
					form,
					authType === 'signin' ? 'socialsignin' : 'signup'
				)
			)
				.then(res => {
					history.push('/')
					// removeError()
					setSucess('login success')
				})
				.catch(err => {
					return
				})
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		initFacebookSdk()
		// eslint-disable-next-line
	}, [])

	let responseFacebook = async res => {
		try {
			auth({
				...state,
				password: '',
				social: true,
				email: res.email,
				facebookId: res.id,
				username: res.name,
				profileImageUrl: res.picture.data.url
			})
		} catch (error) {}
	}

	let login = async () => {
		// login with facebook then authenticate with the API to get a JWT auth token
		const { authResponse } = await new Promise(window.FB.login)
		axios
			.post(
				`https://graph.facebook.com/v8.0/me?access_token=${authResponse?.accessToken}`,
				{ fields: 'name,email,picture' }
			)
			.then(response => {
				const { data } = response
				responseFacebook(data)
			})
	}

	return (
		<div>
			<Box onClick={login}>
				<FacebookIcon />
				<span style={{ marginLeft: 6, fontWeight: 600 }}>
					{authType === 'signin' ? 'Log in' : 'Join'} with Facebook
				</span>
			</Box>
		</div>
	)
}
