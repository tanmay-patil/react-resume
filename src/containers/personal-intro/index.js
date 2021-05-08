/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import MotionHoverScaleDrag from '../../components/MotionHoverScaleDrag';
import Section from '../../components/Section';
import { STATIC_TEXT } from '../../static-texts';
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

	const currentYear = new Date().getFullYear();

	return (
		<Section>
			<div className="personal-intro-text-container">
				<div className="personal-intro-inner-container">
					<div className="personal-intro-title">
						<div className="personal-intro-top-subtitle">
							{STATIC_TEXT.HOME_PAGE.portfolioLabel} <b>{currentYear}</b>
						</div>

						<span
							onClick={handleOnClick}
							onMouseEnter={handleOnMouseEnter}
							onMouseLeave={handleOnMouseLeave}
						>
							<MotionHoverScaleDrag>
								<MyName />
							</MotionHoverScaleDrag>
						</span>
					</div>

					{isSubtitleHovering && showBottomSubtitle && (
						<div className="personal-intro-subtitle">
							{STATIC_TEXT.HOME_PAGE.introSubtitle1}
						</div>
					)}

					{!isSubtitleHovering && showBottomSubtitle && (
						<div className="personal-intro-subtitle">
							{STATIC_TEXT.HOME_PAGE.introSubtitle2}
						</div>
					)}
				</div>
			</div>
		</Section>
	);
};

export default PersonalIntro;
