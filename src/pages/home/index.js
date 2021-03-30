import PropTypes from 'prop-types';
import './index.scss';
import { emptyArrowFunction } from '../../helpers/utils';
import TopBar from '../../containers/top-bar';
import ThemeWrapper from '../../containers/theme-toggle/ThemeWrapper';
export default function Home() {
	return (
		<>
			<ThemeWrapper>
				<TopBar />
			</ThemeWrapper>

			<div className="container">TANMAY PATIL</div>
		</>
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
