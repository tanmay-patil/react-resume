import PropTypes from 'prop-types';
import './index.scss';
import { emptyArrowFunction } from '../../helpers/utils';
import Toggle from '../theme-toggle/';

export default function TopBar({ themeToggler, theme }) {
	return (
		<div className="topbar-container">
			<span className="topbar-abbreviation">
				<span className="topbar-firstchar">T</span>P
			</span>

			<span className="topbar-flex-grow"></span>

			<span className="topbar-toggle">
				<Toggle theme={theme} toggleTheme={themeToggler} />
			</span>
		</div>
	);
}

TopBar.propTypes = {
	themeToggler: PropTypes.func,
	theme: PropTypes.object,
};

TopBar.defaulPropTypes = {
	themeToggler: emptyArrowFunction,
	theme: {},
};