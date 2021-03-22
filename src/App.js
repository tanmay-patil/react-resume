import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/home';
import { GlobalStyles } from './theme/GlobalStyles';
import { useDarkMode } from './containers/theme-toggle/UseDarkMode';
import { lightTheme, darkTheme } from './theme/index';

export default function App() {
	const [theme, themeToggler, mountedTheme] = useDarkMode();

	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	if (!mountedTheme) {
		return null;
	}

	return (
		// ThemeProvider, a styled-components helper component, wraps everything in the return statement and injects any components below it.
		<Router>
			<ThemeProvider theme={themeMode} themeToggler={themeToggler}>
				{/* GlobalStyles inject global styles into our components; hence, it’s called inside the ThemeProvider wrapper component. */}
				<GlobalStyles />
				<Switch>
					<Route path="/">
						<Home theme={themeMode} themeToggler={themeToggler} />
					</Route>
				</Switch>
			</ThemeProvider>
		</Router>
	);
}
