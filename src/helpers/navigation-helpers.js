import * as Scroll from 'react-scroll';
import { PAGE_NAMES } from '../constants';

export const goToAboutUsPage = () => {
	reactScrollToPage(PAGE_NAMES.ABOUT);
};

export const reactScrollToPage = (pageName) => {
	Scroll.scroller.scrollTo(pageName, {
		duration: 800,
		delay: 0,
		smooth: 'easeInOutQuart',
		containerId: 'scroll-container',
	});
};
