import React, { useEffect, useState } from 'react'
import './signin.css'
import {
	Container,
	IconButton,
	Link,
	makeStyles,
	OutlinedInput,
	useMediaQuery
} from '@material-ui/core'

import { Typography, Box, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import Facebook from './Facebook'
import Google from './Google'
import qs from 'query-string'
import { logout } from '../../redux/actions/auth'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import Loader from 'react-loader-spinner'
import { resetPassword } from '../../redux/actions/auth'
import { addError } from '../../redux/actions/error'
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		background: 'white',
		justifyContent: 'space-around',
		height: '100%',
		padding: theme.spacing(6, 2)
	},
	title: {
		fontSize: 40,
		fontWeight: 800
	},
	form: {
		width: '80%',
		padding: theme.spacing(1),
		height: ({ authType }) => (authType === 'signup' ? '60%' : '45%'),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		'& > div ': {
			width: '100%',

			'& > p': {
				alignSelf: 'flex-start',
				fontWeight: 700
			}
		}
	},
	btn: {
		fontWeight: 700,
		borderRadius: 50,
		padding: theme.spacing(1.5, 1),
		marginTop: theme.spacing(1.5)
	},
	input: {
		borderRadius: 50,
		background: '#f5f5f5',
		'& > input': {
			padding: theme.spacing(1.5),
			'&:-webkit-autofill': {
				boxShadow: '0 0 0 30px #F5F5F5F5 inset'
			}
		}
	},
	socialMediaContainer: {
		'& *': {
			cursor: 'pointer'
		}
	},
	footer: {
		marginTop: theme.spacing(2.5),
		'& > span': {
			fontWeight: 700,
			cursor: 'pointer'
		}
	},
	resetButtonContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		marginTop: 30,
		'& > button': {
			margin: 10
		}
	},
	orDivider: {
		textAlign: 'center',
		marginTop: theme.spacing(3),
		'& > hr': {
			background: 'rgba(144,144,144,.5)',
			magrin: 0,

			marginBottom: theme.spacing(-1.75)
		},
		'& > span': {
			display: 'inline-block',
			background: 'white',
			width: 50
		}
	}
}))
const Singin = ({
	errors,
	onAuth,
	removeError,
	history,
	location,
	authType,
	setAuthType,
	onClose
}) => {
	const [passwordHighlight, setpasswordHighlight] = useState(false)
	const [forgotPassword, setForgotPassword] = useState(false)

	const classes = useStyles({ authType, passwordHighlight, forgotPassword })
	const [authTypeObj, setAuthTypeObj] = useState({
		title: '',
		btn: '',
		social: '',
		switchType: ''
	})

	const [loading, setLoading] = useState(false)

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(logout())
		location.search.includes('login')
			? setAuthType('signin')
			: setAuthType('signup')
		return () => {
			setAuthType('')
		}
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		authType === 'signin'
			? setAuthTypeObj({
					title: 'Log in to v2v',
					btn: 'Log in',
					footer: 'New to v2v? ',
					switchType: 'Join'
			  })
			: setAuthTypeObj({
					title: 'Sign up to v2v',
					btn: 'Join',
					footer: 'Already on v2v? ',
					switchType: 'log in'
			  })
	}, [authType])

	useEffect(() => {
		const params = new URLSearchParams(location.search)
		const forgotPassword = params.get('forgot_password')
		if (forgotPassword) setForgotPassword(true)
	}, [])

	const [form, setForm] = useState({
		email: '',
		password: '',
		username: '',
		facebookId: '',
		googleId: '',
		profileImageUrl: '',
		resetEmail: '',
		showPassword: false
	})

	function resetUserPassword() {
		dispatch(resetPassword(form.resetEmail))
		dispatch({
			type: 'ADD_ERROR',
			errors: 'Verification email sent',
			severity: 'success'
		})
		history.push('/')
	}

	//if you want error to display all you have to do is the below block and then setErr(your error)
	const setErr = errors =>
		dispatch({
			type: 'ADD_ERROR',
			errors,
			severity: 'error'
		})

	const handleSubmit = e => {
		setLoading(true)
		e && e.preventDefault()
		const { email, username, password, facebookId, googleId } = form
		let isCompleteFields =
			authType === 'signup' ? email && password && username : email && password
		if (!isCompleteFields) {
			setErr('Please fill the required fields')
			return
		}
		//we are passing onAuth as a prop from main and get it from redux/action auth-authUser
		//if no error redirecting and removing errors else eeeor hundling are inclueded in onAuth and displayes trow the error state with Dialog
		onAuth('post', form, authType)
			.then(() => {
				const { path } = qs.parse(location.search)
				history.push(path ? path : '/')
				removeError()
			})
			.catch(err => {
				setErr(err)
				return
			})
			.finally(() => {
				setLoading(false)
			})
	}
	const handleChange = e =>
		setForm({ ...form, [e.target.name]: e.target.value })

	const social = (
		<Box className={classes.socialMediaContainer}>
			<Google
				authType={authType}
				extended={false}
				setstate={setForm}
				state={form}
				handleSubmit={handleSubmit}
				setpasswordHighlight={setpasswordHighlight}
			/>
			<Facebook
				authType={authType}
				extended={false}
				setstate={setForm}
				state={form}
				handleSubmit={handleSubmit}
				setpasswordHighlight={setpasswordHighlight}
			/>
		</Box>
	)

	function togglePassword() {
		setForm({ ...form, showPassword: !form.showPassword })
	}

	const inputProps = {
		fullWidth: true,
		className: classes.input,
		onChange: handleChange
	}

	const eyeIcon = (
		<IconButton onClick={togglePassword}>
			{form.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
		</IconButton>
	)
	return !forgotPassword ? (
		<Container className={classes.root}>
			<Typography className={classes.title}>{authTypeObj.title}</Typography>
			<form onSubmit={handleSubmit} className={classes.form}>
				{!passwordHighlight && (
					<div>
						<div>
							<Typography>Email</Typography>
							<OutlinedInput
								name="email"
								value={form.email}
								type="email"
								{...inputProps}
							/>
						</div>
						{authType === 'signup' ? (
							<div>
								<Typography>Username</Typography>
								<OutlinedInput
									name="username"
									value={form.username}
									{...inputProps}
								/>
							</div>
						) : null}
					</div>
				)}
				<div>
					{passwordHighlight ? (
						<Typography color="error">
							please fill the password and try again
						</Typography>
					) : (
						<Typography>Password</Typography>
					)}
					<OutlinedInput
						name="password"
						{...inputProps}
						value={form.password}
						type={form.showPassword ? 'text' : 'password'}
						endAdornment={eyeIcon}
						error={passwordHighlight}
					/>
				</div>
				<Button
					color="primary"
					className={classes.btn}
					variant="contained"
					fullWidth
					type="submit"
					disabled={passwordHighlight}
				>
					{!loading ? (
						authTypeObj.btn
					) : (
						<Loader type="Oval" color="white" width={25} height={25} />
					)}
				</Button>
				{authType !== 'signup' ? (
					<Button
						style={{ marginTop: 10, fontSize: 16 }}
						onClick={() => setForgotPassword(true)}
						variant="link"
					>
						Forgot password?
					</Button>
				) : null}
			</form>
			<Container className={classes.orDivider}>
				<hr />
				<span>Or</span>
			</Container>
			{social}
			<Typography className={classes.footer} style={{ marginTop: 20 }}>
				{authTypeObj.footer}
				<span
					onClick={() => {
						console.log(authType)
						setAuthType(authType === 'signin' ? 'signup' : 'signin')
					}}
				>
					{authTypeObj.switchType}
				</span>
			</Typography>
		</Container>
	) : (
		<form style={{ padding: 20 }}>
			<Typography variant="h4">Reset Password</Typography>
			<hr />
			<Typography style={{ fontWeight: 700 }} variant="h6">
				Please enter your email to search for your account.
			</Typography>
			<OutlinedInput
				style={{ marginTop: 30 }}
				name="resetEmail"
				{...inputProps}
				type="text"
				placeholder="Email"
				value={form.resetEmail}
			/>
			<div className={classes.resetButtonContainer}>
				<Button
					variant="contained"
					style={{ fontWeight: 700 }}
					onClick={() =>  setForgotPassword(false)}
				>
					Cancel
				</Button>
				<Button
					variant="contained"
					style={{ fontWeight: 700 }}
					onClick={resetUserPassword}
					color="secondary"
				>
					Reset password
				</Button>
			</div>
		</form>
	)
}

export default Singin
