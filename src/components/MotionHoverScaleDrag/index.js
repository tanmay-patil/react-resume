import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { isMobile } from '../../helpers/utils';

const MotionHoverScaleDrag = ({ children, scale, duration }) => {
	const whileTapScale = isMobile ? 0.9 : 1;

	return (
		<motion.div
			drag={!isMobile}
			dragConstraints={{
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
			}}
			whileHover={{ scale }}
			whileTap={{ scale: whileTapScale }}
			initial="hidden"
			animate="visible"
			transition={{ duration }}
		>
			{children}
		</motion.div>
	);
};

MotionHoverScaleDrag.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	scale: PropTypes.number,
	duration: PropTypes.number,
};

MotionHoverScaleDrag.defaultProps = {
	scale: 1.1,
	duration: 0.2,
};
export default MotionHoverScaleDrag;
