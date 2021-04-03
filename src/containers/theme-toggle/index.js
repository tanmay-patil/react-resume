import React from 'react';
import PropTypes from 'prop-types';
import SunIcon from '../../assets/images/theme-toggler/sun.svg';
import MoonIcon from '../../assets/images/theme-toggler/moon.svg';
import './index.scss';
// import MotionHoverScale from '../../components/MotionHoverScale';
import MotionHoverScaleDrag from '../../components/MotionHoverScaleDrag';

const Toggle = ({ theme, toggleTheme }) => {
	const isDarkMode = theme.text == 'white';

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
