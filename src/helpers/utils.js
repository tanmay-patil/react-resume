export const emptyArrowFunction = () => {
	/** */
};

export const evaluateTernary = (subject, truthy, falsey) => {
	if (subject && truthy && falsey) {
		return subject ? truthy : falsey;
	}

	return null;
};

const isMobileFn = () => {
	const ua = navigator.userAgent;
	return /Android|Mobi/i.test(ua);
};

export const isMobile = isMobileFn();
