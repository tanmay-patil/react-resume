/**
 * IMPLEMENTATION
To implement dark mode, we need to create four different components.

- Theme
This contains the color properties of our light and dark themes.

- GlobalStyles
This contains the global styles for the entire document.

- Toggler
This holds the button element that toggles the functionality.

- useDarkMode
This custom hook handles the logic behind the change of theme and the persistence of our theme in localStorage.
 */

import { THEME_TYPE } from '../constants';

export const lightTheme = {
	text: 'rgb(71,71,71)',
	background: '#ece5dd',
	type: THEME_TYPE.LIGHT,
};
export const darkTheme = {
	text: '#d2c9c4',
	background: '#030407',
	type: THEME_TYPE.DARK,
};
