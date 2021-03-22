import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalStyles } from '../../theme/GlobalStyles';
import { useDarkMode } from '../../containers/theme-toggle/UseDarkMode';
import { lightTheme, darkTheme } from '../../theme/index';

const ThemeWrapper = (props) => {
	const [theme, themeToggler] = useDarkMode();

	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	const childrenWithProps = React.Children.map(props.children, (child) => {
		// checking isValidElement is the safe way and avoids a typescript error too
		if (React.isValidElement(child)) {
			return React.cloneElement(child, {
				theme: themeMode,
				themeToggler: themeToggler,
			});
		}
		return child;
	});

	return (
		<ThemeProvider theme={themeMode} themeToggler={themeToggler}>
			{/* GlobalStyles inject global styles into our components; hence, it’s called inside the ThemeProvider wrapper component. */}
			<GlobalStyles />
			<>{childrenWithProps}</>
		</ThemeProvider>
	);
};

export default ThemeWrapper;

ThemeWrapper.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};
