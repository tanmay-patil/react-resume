import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import ThemeWrapper from './containers/theme-toggle/ThemeWrapper';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<ThemeWrapper>
						<Home />
					</ThemeWrapper>
				</Route>
			</Switch>
		</Router>
	);
}
