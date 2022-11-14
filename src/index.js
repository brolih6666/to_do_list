import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
const user = 'asd'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>
)

// If you want to start measuring performance in your app, pass a
