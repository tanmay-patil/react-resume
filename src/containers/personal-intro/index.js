/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
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
		<div className="personal-intro-text-container">
			<div className="personal-intro-inner-container">
				<div
					className="personal-intro-title"
					onClick={handleOnClick}
					onMouseEnter={handleOnMouseEnter}
					onMouseLeave={handleOnMouseLeave}
				>
					<div className="personal-intro-top-subtitle">portfolio 2021</div>

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
						Full Stack Web Developer
					</div>
				)}
			</div>
		</div>
	);
};

export default PersonalIntro;
