import axios from 'axios'

export function setTokenHeader(token) {
	if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
	else delete axios.defaults.headers.common['Authorization']
}

/**
 * A warapper around axios API call that formats error
 * @param {string} method the HTTP verb you want to use like get post etc...
 * @param {string*} path the roue path/endpoint
 * @param {*object} data (optional) data in JSON format for POST requests
 */

export function apiCall(method, path, data) {
	return new Promise((resolve, reject) => {
		if (path.includes('undefined')) return
		if (!(path.includes('api') || path.includes('admin'))) return
		let finelPath = path
		if (process.env.NODE_ENV === 'production') {
			finelPath = `https://lokaliforyou-server.herokuapp.com${path}`
		}
		return axios[method](finelPath, data)
			.then(res => {
				return resolve(res.data)
			})
			.catch(err => {
				console.log(err)

				return reject(err?.response?.data?.error)
			})
	})
}

