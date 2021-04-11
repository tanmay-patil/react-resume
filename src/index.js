import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.scss'; // Contains theme import
import App from './App';
import reportWebVitals from './reportWebVitals';
import AnimatedCursor from './components/AnimatedCursor';
import { isMobile } from './helpers/utils';

ReactDOM.render(
	<React.StrictMode>
		{/* Show Animated Cursor for non-mobile devices */}
		{!isMobile && <AnimatedCursor />}

		{/* Render the rest of the app */}
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
