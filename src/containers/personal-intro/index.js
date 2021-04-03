/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useState } from 'react';
import './index.scss';

const PersonalIntro = () => {
	const [isSubtitleHovering, setIsSubtitleHovering] = useState(false);

	const variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	const handleOnMouseEnter = () => {
		setIsSubtitleHovering(true);
	};

	const handleOnMouseLeave = () => {
		setIsSubtitleHovering(false);
	};

	return (
		<div className="personal-intro-text-container">
			<div className="personal-intro-inner-container">
				<div
					className="personal-intro-title"
					onMouseEnter={handleOnMouseEnter}
					onMouseLeave={handleOnMouseLeave}
				>
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						initial="hidden"
						animate="visible"
						variants={variants}
					>
						TANMAY PATIL
					</motion.div>
				</div>

				{isSubtitleHovering ? (
					<div className="personal-intro-subtitle">
						The JavaScript <span>Ninja</span>
					</div>
				) : (
					<div className="personal-intro-subtitle">
						Full Stack Web Developer
					</div>
				)}
			</div>
		</div>
	);
};

export default PersonalIntro;
