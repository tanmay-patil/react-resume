/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import './index.scss';
import { emptyArrowFunction } from '../../helpers/utils';
import TopBar from '../../containers/top-bar';
import ThemeWrapper from '../../containers/theme-toggle/ThemeWrapper';
import { useSpring, animated } from 'react-spring';
import { useEffect, useState } from 'react';
export default function Home() {
	const [showName, setShowName] = useState(false);
	const props = useSpring({ opacity: showName ? 1 : 0 });

	useEffect(() => {
		setTimeout(() => {
			setShowName((val) => {
				return !val;
			});
		}, 1000);
	}, []);

	return (
		<>
			<ThemeWrapper>
				<TopBar />
			</ThemeWrapper>

			<animated.div style={props}>
				<div className="container">TANMAY PATIL</div>
			</animated.div>
		</>
	);
}

Home.propTypes = {
	themeToggler: PropTypes.func,
	theme: PropTypes.object,
};

Home.defaulPropTypes = {
	themeToggler: emptyArrowFunction,
	theme: {},
};
