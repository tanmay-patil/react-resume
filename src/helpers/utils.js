export const emptyArrowFunction = () => {
	/** */
};

export const evaluateTernary = (subject, truthy, falsey) => {
	if (subject && truthy && falsey) {
		return subject ? truthy : falsey;
	}

	return null;
};

export const isMobile = window.innerWidth < 800;
