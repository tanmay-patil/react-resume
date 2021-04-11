/* eslint-disable no-unused-vars */
import React from 'react';
import { GlobalStyles } from '../../theme/GlobalStyles';
import ThemeContext from '../../contexts/ThemeContext';

const ThemeWrapper = () => {
	return (
		<ThemeContext.Consumer>
			{(contextValue) => {
				return <GlobalStyles theme={contextValue.themeMode} />;
			}}
		</ThemeContext.Consumer>
	);
};

export default ThemeWrapper;
