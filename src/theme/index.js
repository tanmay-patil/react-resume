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

export const lightTheme = {
	text: 'black',
	background: '#ebebeb',
};
export const darkTheme = {
	text: 'white',
	background: '#030407',
};
