/* eslint-disable no-unused-vars */
import PageTitle from '../../components/PageTitle';
import Section from '../../components/Section';
import { STATIC_TEXT } from '../../static-texts';
import './index.scss';
import UnderConstruction from '../../assets/images/under-construction.png';

export default function Skills() {
	return (
		<Section>
			<div className="skills-container">
				<PageTitle
					text={STATIC_TEXT.SKILLS_PAGE.pageTitle.primary}
					secondaryText={STATIC_TEXT.SKILLS_PAGE.pageTitle.secondary}
				></PageTitle>

				<div>
					<img className="coming-soon" src={UnderConstruction} />
				</div>
			</div>
		</Section>
	);
}
