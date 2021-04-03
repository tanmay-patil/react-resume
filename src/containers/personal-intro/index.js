/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import MotionScale from '../../components/MotionScale';
import MotionHoverScaleDrag from '../../components/MotionHoverScaleDrag';
import './index.scss';
import MyName from './MyName';

const PersonalIntro = () => {
	const [isSubtitleHovering, setIsSubtitleHovering] = useState(false);
	const [showSubtitle, setShowSubtitle] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowSubtitle(true);
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
					<MotionHoverScaleDrag>
						<MyName />
					</MotionHoverScaleDrag>
				</div>

				{isSubtitleHovering && showSubtitle && (
					<MotionScale>
						<div className="personal-intro-subtitle">
							The JavaScript <span>Ninja</span>
						</div>
					</MotionScale>
				)}

				{!isSubtitleHovering && showSubtitle && (
					<MotionScale>
						<div className="personal-intro-subtitle">
							Full Stack Web Developer
						</div>
					</MotionScale>
				)}
			</div>
		</div>
	);
};

export default PersonalIntro;
