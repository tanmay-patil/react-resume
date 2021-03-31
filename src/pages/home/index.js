/* eslint-disable no-unused-vars */
import './index.scss';
import TopBar from '../../containers/top-bar';
import ThemeWrapper from '../../containers/theme-toggle/ThemeWrapper';
import PersonalIntro from '../../containers/personal-intro';
export default function Home() {
	return (
		<>
			<ThemeWrapper>
				<TopBar />
			</ThemeWrapper>

			<PersonalIntro />
		</>
	);
}
