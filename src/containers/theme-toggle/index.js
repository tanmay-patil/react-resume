/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import SunIcon from '../../assets/images/theme-toggler/sun.svg';
import MoonIcon from '../../assets/images/theme-toggler/moon.svg';
import './index.scss';
import MotionHoverScaleDrag from '../../components/MotionHoverScaleDrag';
import { THEME_TYPE } from '../../constants';

const Toggle = ({ theme, toggleTheme }) => {
	const isDarkMode = theme.type == THEME_TYPE.DARK;

	return <div onClick={toggleTheme}>{isDarkMode ? <SUN /> : <MOON />}</div>;
};
Toggle.propTypes = {
	theme: PropTypes.object.isRequired,
	toggleTheme: PropTypes.func.isRequired,
};
export default Toggle;

const SUN = () => {
	return (
		<MotionHoverScaleDrag>
			<img className="toggle-icon cursor-pointer" src={SunIcon} />
		</MotionHoverScaleDrag>
	);
};

const MOON = () => {
	return (
		<MotionHoverScaleDrag>
			<img className="toggle-icon cursor-pointer" src={MoonIcon} />
		</MotionHoverScaleDrag>
	);
};
