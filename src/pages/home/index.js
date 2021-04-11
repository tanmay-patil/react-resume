/* eslint-disable no-unused-vars */
import './index.scss';
import TopBar from '../../containers/top-bar';
import ThemeWrapper from '../../containers/theme-toggle/ThemeWrapper';
import PersonalIntro from '../../containers/personal-intro';
import Section from '../../components/Section';
import About from '../about';

export default function Home() {
	return (
		<>
			<Section>
				<ThemeWrapper>
					<TopBar />
					<PersonalIntro />
				</ThemeWrapper>
			</Section>
		</>
	);
}
