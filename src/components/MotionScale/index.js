import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const MotionScale = ({ children, scale, duration }) => {
	return (
		<motion.div animate={{ scale }} transition={{ duration }}>
			{children}
		</motion.div>
	);
};

MotionScale.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	scale: PropTypes.number,
	duration: PropTypes.number,
};

MotionScale.defaultProps = {
	scale: 1.1,
	duration: 0.2,
};
export default MotionScale;
