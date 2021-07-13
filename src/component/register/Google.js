import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import { makeStyles } from '@material-ui/core'
import { ReactComponent as GoogleIcon } from '../../icons/GoogleIcon.svg'
import { authUser } from '../../store/actions/auth'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { setPasswordHighlight } from '../../store/actions/auth'

const useStyles = makeStyles(theme => ({
	socialMediaIconBox: extended => ({
		width: extended ? '95%' : '44px',
		height: '45px',
		fontWeight: 800,

		display: 'flex',
		boxShadow: theme.shadows[4],
		alignItems: 'center',
		borderRadius: extended ? '100px' : '7px',
		justifyContent: extended ? '' : 'center'
	}),

	root: {
		display: 'flex',
		margin: theme.spacing(2, 0),

		flexDirection: 'column',
		justifyItems: 'center',
		'& button': {
			backgroundImage:
				' url(https://img.icons8.com/material-sharp/24/000000/google-logo.png)',

			width: '30px',
			height: '30px',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			border: 'none',
			padding: '0'
		}
	},
	loginText: {
		position: 'absolute',
		left: '50%',
		transform: 'translate(-55%, 0)'
	}
}))

export default function Google({
	setstate,
	state,
	handleSubmit,
	extended,
	authType
}) {
	const classes = useStyles(extended)
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

	let responseGoogle = res => {
		let { profileObj } = res
		auth({
			...state,
			password: '',
			social: true,
			email: profileObj.email,
			googleId: profileObj.googleId,
			username: `${profileObj.givenName} ${profileObj.familyName}`,
			profileImageUrl: profileObj.imageUrl
		})
	}

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

	return (
		<div className={classes.root}>
			<GoogleLogin
				render={renderProps => (
					<div
						onClick={renderProps.onClick}
						disabled={renderProps.disabled}
						className={classes.socialMedia}
					>
						<GoogleIcon />
						<span style={{ marginLeft: 6, fontWeight: 600 }}>
							{authType === 'signin' ? 'Log in' : 'Join'} with Google
						</span>
					</div>
				)}
				clientId={
					process.env.REACT_APP_GOOGLE_LOGIN_ID ||
					'659438913448-e0343um61gtpmpdtp9jhr1hfu1r160he.apps.googleusercontent.com'
				}
				buttonText="Login"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
				cookiePolicy={'single_host_origin'}
				className={classes.googleLogin}
			/>
		</div>
	)
}
