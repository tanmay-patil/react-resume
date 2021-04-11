/* eslint-disable no-unused-vars */
import './fonts.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/home';
import About from './pages/about';
import ThemeContext from './contexts/ThemeContext';
import { useDarkMode } from './containers/theme-toggle/UseDarkMode';
import { darkTheme, lightTheme } from './theme';
import ThemeWrapper from './containers/theme-toggle/ThemeWrapper';
import { THEME_TYPE } from './constants';

export default function App() {
	const [theme, themeToggler] = useDarkMode();
	const themeMode = theme === THEME_TYPE.LIGHT ? lightTheme : darkTheme;

	return (
		<ThemeContext.Provider value={{ theme, themeToggler, themeMode }}>
			<ThemeWrapper />
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
		</ThemeContext.Provider>
	);
}
