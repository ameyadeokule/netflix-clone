import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { Home } from './pages'

export default function App() {
	return (
		<Router>
			<Route exaxt path={ROUTES.HOME}>
				<Home />
			</Route>
		</Router>
	)
}
