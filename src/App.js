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
import { PAGE_NAMES, THEME_TYPE } from './constants';
import TopBar from './containers/top-bar';
import './index.scss';
import { ScrollElement } from './components/ScrollElement';

export default function App() {
	const [theme, themeToggler] = useDarkMode();
	const themeMode = theme === THEME_TYPE.LIGHT ? lightTheme : darkTheme;

	const renderMain = () => {
		return (
			<div
				style={{
					overflow: 'hidden',
					height: window.innerHeight,
				}}
			>
				<TopBar />

				<ScrollElement className="render-main-body" id="scroll-container">
					<ScrollElement name={PAGE_NAMES.HOME}>
						<Home />
					</ScrollElement>

					<ScrollElement name={PAGE_NAMES.ABOUT}>
						<About />
					</ScrollElement>
				</ScrollElement>
			</div>
		);
	};

	return (
		<ThemeContext.Provider value={{ theme, themeToggler, themeMode }}>
			<ThemeWrapper />
			<Router>
				<Route
					render={({ location }) => (
						<AnimatePresence exitBeforeEnter>
							<Switch location={location} key={location.pathname}>
								<Route exact path="/" component={() => renderMain()} />
								{/* <Route exact path="/home" component={Home} />
								<Route exact path="/about" component={About} /> */}
							</Switch>
						</AnimatePresence>
					)}
				/>
			</Router>
		</ThemeContext.Provider>
	);
}
