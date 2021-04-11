/* eslint-disable no-unused-vars */
import Section from '../../components/Section';
import ThemeWrapper from '../../containers/theme-toggle/ThemeWrapper';
import TopBar from '../../containers/top-bar';
import './index.scss';

export default function About() {
	return (
		<>
			<Section>
				<ThemeWrapper>
					<TopBar />
					<div>ABOUT ME PAGE</div>
				</ThemeWrapper>
			</Section>
		</>
	);
}
