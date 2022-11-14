import { useState } from 'react'
import styles from './Signup.module.css'

export default function Signup() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [displayName, setDisplayName] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		console.log(email)
	}
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<h2>Sign Up</h2>
			<label>
				<span>email:</span>
				<input type='email' required onChange={e => setEmail(e.target.value)} value={email} />
			</label>
			<label>
				<span>password:</span>
				<input type='password' required onChange={e => setPassword(e.target.value)} value={password} />
			</label>
			<label>
				<span>display name:</span>
				<input type='text' required onChange={e => setDisplayName(e.target.value)} value={displayName} />
			</label>
			<button className={`btn ${styles.button}`}>Submit</button>
		</form>
	)
}
