import { useEffect, useState } from 'react';

const localTheme = window.localStorage.getItem('theme');

export const useDarkMode = () => {
	const [theme, setTheme] = useState('light');
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
		theme === 'light' ? setMode('dark') : setMode('light');
	};

	return [theme, themeToggler, mountedTheme];
};
