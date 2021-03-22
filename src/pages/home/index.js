import Toggle from '../../containers/theme-toggle';
import PropTypes from 'prop-types';
import './index.scss';
import { emptyArrowFunction } from '../../helpers/utils';
export default function Home({ themeToggler, theme }) {
	return (
		<div className="container">
			TANMAY PATIL
			<Toggle theme={theme} toggleTheme={themeToggler} />
		</div>
	);
}

Home.propTypes = {
	themeToggler: PropTypes.func,
	theme: PropTypes.object,
};

Home.defaulPropTypes = {
	themeToggler: emptyArrowFunction,
	theme: {},
};
