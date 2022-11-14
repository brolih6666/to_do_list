import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from './logo.jpg'

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link to='/'>
				<img className={styles.logo} src={logo} alt='logo' />
			</Link>
			<Link to='/'>Task List</Link>
			<Link to='/login'>Log in</Link>
			<Link to='/signup'>Sign up</Link>
		</nav>
	)
}
