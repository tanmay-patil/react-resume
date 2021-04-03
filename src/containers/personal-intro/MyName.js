import React from 'react';
// import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { isMobile } from '../../helpers/utils';

const MyName = () => {
	const name = 'TANMAY PATIL';

	const wordBreakElement = isMobile ? <span>{'\n'}</span> : <span>&nbsp;</span>;

	const variant1 = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.18,
			},
		},
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<motion.div
			className="my-name-ul"
			variants={variant1}
			initial="hidden"
			animate="visible"
			transition={{ duration: 0.2 }}
		>
			{name.split('').map((char, i) => {
				return (
					<motion.span
						transition={{ duration: 1.5 }}
						className="my-name-list-item"
						key={i}
						variants={item}
					>
						{char == ' ' ? wordBreakElement : char}
					</motion.span>
				);
			})}
		</motion.div>
	);
};

MyName.propTypes = {};

MyName.defaultProps = {};
export default MyName;
