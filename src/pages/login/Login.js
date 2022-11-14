import { useState } from 'react'
import styles from './Login.module.css'

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		console.log(email)
	}
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<h2>Log in</h2>
			<label>
				<span>email:</span>
				<input type='email' required onChange={e => setEmail(e.target.value)} value={email} />
			</label>
			<label>
				<span>password:</span>
				<input type='password' required onChange={e => setPassword(e.target.value)} value={password} />
			</label>

			<button className={`btn ${styles.button}`}>Login</button>
		</form>
	)
}
