import './App.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
// pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
function App() {
	return (
		<div className='App'>
			<Navbar />
			<Route exact path='/'>
				<Home />
			</Route>
			<Route exact path='/login'>
				<Login />
			</Route>
			<Route path='/signup'>
				<Signup />
			</Route>
		</div>
	)
}

export default App
