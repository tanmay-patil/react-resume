import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';

export default function App() {
	return (
		<Router>
			{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}
