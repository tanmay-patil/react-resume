/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import MotionHoverScaleDrag from '../../components/MotionHoverScaleDrag';
import Section from '../../components/Section';
import { STATIC_TEXT } from '../../static-texts';
import './index.scss';
import MyName from './MyName';
import OrbitDark from '../../assets/images/background/orbit-dark.svg';
import OrbitLight from '../../assets/images/background/orbit-light.svg';
import ThemeContext from '../../contexts/ThemeContext';
import { THEME_TYPE } from '../../constants';

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
		<ThemeContext.Consumer>
			{(contextValue) => {
				const isDarkMode = contextValue.theme == THEME_TYPE.DARK;
				const imageSource = isDarkMode ? OrbitDark : OrbitLight;

				return (
					<Section>
						<div className="personal-intro-text-container">
							<img className="img-orbit" src={imageSource} />
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
			}}
		</ThemeContext.Consumer>
	);
};

export default PersonalIntro;
