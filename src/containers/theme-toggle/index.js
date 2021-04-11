/* eslint-disable no-unused-vars */
import React from 'react';
import SunIcon from '../../assets/images/theme-toggler/sun.svg';
import MoonIcon from '../../assets/images/theme-toggler/moon.svg';
import './index.scss';
import MotionHoverScaleDrag from '../../components/MotionHoverScaleDrag';
import { THEME_TYPE } from '../../constants';
import ThemeContext from '../../contexts/ThemeContext';

const Toggle = () => {
	return (
		<ThemeContext.Consumer>
			{(contextValue) => {
				const isDarkMode = contextValue.theme == THEME_TYPE.DARK;

				return (
					<div onClick={contextValue.themeToggler}>
						{isDarkMode ? <SUN /> : <MOON />}
					</div>
				);
			}}
		</ThemeContext.Consumer>
	);
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
