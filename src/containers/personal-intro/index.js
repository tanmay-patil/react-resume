/* eslint-disable no-unused-vars */
import './index.scss';
import { useSpring, animated } from 'react-spring';
import { useEffect, useState } from 'react';

const PersonalIntro = () => {
	const [showName, setShowName] = useState(false);
	const [showSubtitle, setShowSubtitle] = useState(false);
	const propsTitle = useSpring({ opacity: showName ? 1 : 0 });
	const propsSubtitle = useSpring({ opacity: showSubtitle ? 1 : 0 });

	useEffect(() => {
		setTimeout(() => {
			setShowName((val) => {
				return !val;
			});
		}, 1000);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setShowSubtitle((val) => {
				return !val;
			});
		}, 2000);
	}, []);

	return (
		<div className="personal-intro-text-container">
			<div className="personal-intro-inner-container">
				<animated.div style={propsTitle}>
					<div className="personal-intro-title">TANMAY PATIL</div>
				</animated.div>

				<animated.div style={propsSubtitle}>
					<div className="personal-intro-subtitle">
						The JavaScript <span>Ninja</span>
					</div>
				</animated.div>
			</div>
		</div>
	);
};

export default PersonalIntro;
