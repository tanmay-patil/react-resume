/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

			<h3>
				<a>
					<Link to={'/about'}>ABOUT ME</Link>
				</a>
			</h3>
		</div>
	);
};

export default PersonalIntro;
