/* eslint-disable no-unused-vars */
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/home';
import About from './pages/about';

export default function App() {
	return (
		<Router>
			<Route
				render={({ location }) => (
					<AnimatePresence exitBeforeEnter>
						<Switch location={location} key={location.pathname}>
							<Route exact path="/" component={Home} />
							<Route exact path="/about" component={About} />
						</Switch>
					</AnimatePresence>
				)}
			/>
		</Router>
	);
}
