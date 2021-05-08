import { PAGE_NAMES } from '../constants';
import { reactScrollToPage } from './utils';

export const goToAboutUsPage = () => {
	reactScrollToPage(PAGE_NAMES.ABOUT);
};
