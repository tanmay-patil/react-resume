import Toggle from '../../containers/theme-toggle';
import PropTypes from 'prop-types';
import './index.scss';

export default function Home({ themeToggler, theme }) {
	return (
		<div className="container">
			HELLO FROM HOME
			<Toggle theme={theme} toggleTheme={themeToggler} />
		</div>
	);
}

Home.propTypes = {
	themeToggler: PropTypes.func,
	theme: PropTypes.object,
};

Home.defaulPropTypes = {
	themeToggler: () => {},
	theme: {},
};
