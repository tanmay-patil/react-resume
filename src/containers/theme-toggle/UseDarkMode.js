import { useEffect, useState } from 'react';
import { THEME_TYPE } from '../../constants';

const localTheme = window.localStorage.getItem('theme');

export const useDarkMode = () => {
	const [theme, setTheme] = useState(THEME_TYPE.LIGHT);
	const [mountedTheme, setMountedTheme] = useState(false);

	useEffect(() => {
		localTheme && setTheme(localTheme);
		setMountedTheme(true);
	}, [localTheme]);

	const setMode = (mode) => {
		window.localStorage.setItem('theme', mode);
		setTheme(mode);
	};

	const themeToggler = () => {
		theme === THEME_TYPE.LIGHT
			? setMode(THEME_TYPE.DARK)
			: setMode(THEME_TYPE.LIGHT);
	};

	return [theme, themeToggler, mountedTheme];
};
