import React, { useState, useEffect } from 'react'
import Signup from './SignUpForModal'
import Modal from '@material-ui/core/Modal'

function LoginModal({ history, location, ...props }) {
	//this modal can be used from anywhere as a portal only need to added query params on the link signin or login
	const params = new URLSearchParams(location.search)
	const [open, setOpen] = useState(
		params.get('signin') || params.get('login') || params.get('signup')
	)

	useEffect(() => {
		setOpen(params.get('signin') || params.get('login') || params.get('signup'))
	}, [params])

	const handleClose = () => {
		history.push(location.pathname)
		setOpen(false)
	}
	const modalStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 16
	}
	const innerModalStyle = {
		height: '85%',
		width: '40%',
		maxWidth: '500px',
		minWidth: '400px',
		background: 'white',
		borderRadius: 16,
		maxHeight: 640
	}
	return (
		<Modal
			open={Boolean(open)}
			onClose={handleClose}
			onBackdropClick={handleClose}
			style={modalStyle}
		>
			<div style={innerModalStyle}>
				<Signup onClose={handleClose} history={history} location={location} {...props} />
			</div>
		</Modal>
	)
}

export default LoginModal
