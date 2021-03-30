import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import SunIcon from '../../assets/images/theme-toggler/sun.svg';
import MoonIcon from '../../assets/images/theme-toggler/moon.svg';
import './index.scss';

const Toggle = ({ theme, toggleTheme }) => {
	const isDarkMode = theme.text == 'white';

	return (
		<div onClick={toggleTheme}>
			{isDarkMode ? (
				<img className="toggle-icon cursor-pointer" src={SunIcon} />
			) : (
				<img className="toggle-icon cursor-pointer" src={MoonIcon} />
			)}
		</div>
	);
};
Toggle.propTypes = {
	theme: PropTypes.object.isRequired,
	toggleTheme: PropTypes.func.isRequired,
};
export default Toggle;
