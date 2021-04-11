/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import MotionHoverScaleDrag from '../../components/MotionHoverScaleDrag';
import './index.scss';
import MyName from './MyName';

const PersonalIntro = () => {
	const [isSubtitleHovering, setIsSubtitleHovering] = useState(false);
	const [showBottomSubtitle, setShowBottomSubtitle] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowBottomSubtitle(true);
		}, 2800);
	}, []);

	const handleOnMouseEnter = () => {
		setIsSubtitleHovering(true);
	};

	const handleOnMouseLeave = () => {
		setIsSubtitleHovering(false);
	};

	const handleOnClick = () => {
		setIsSubtitleHovering((val) => !val);
	};

	return (
		<div className="section">
			<div className="personal-intro-text-container">
				<div className="personal-intro-inner-container">
					<div
						className="personal-intro-title"
						onClick={handleOnClick}
						onMouseEnter={handleOnMouseEnter}
						onMouseLeave={handleOnMouseLeave}
					>
						<div className="personal-intro-top-subtitle">
							portfolio <b>2021</b>
						</div>

						<MotionHoverScaleDrag>
							<MyName />
						</MotionHoverScaleDrag>
					</div>

					{isSubtitleHovering && showBottomSubtitle && (
						<div className="personal-intro-subtitle">
							The JavaScript <span>Ninja</span>
						</div>
					)}

					{!isSubtitleHovering && showBottomSubtitle && (
						<div className="personal-intro-subtitle">
							Full Stack <b>Web / Mobile</b> Dev
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default PersonalIntro;
