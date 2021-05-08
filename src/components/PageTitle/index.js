/* eslint-disable react/prop-types */
import { useState } from 'react';
import './index.scss';

const PageTitle = ({ text, secondaryText }) => {
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};

	const handleMouseLeave = () => {
		setIsHover(false);
	};

	return (
		<p
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="page-title"
		>
			{isHover ? secondaryText : text}
		</p>
	);
};

export default PageTitle;
