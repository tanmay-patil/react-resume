import './index.scss';
import Toggle from '../theme-toggle/';
import MotionHoverScaleDrag from '../../components/MotionHoverScaleDrag';

export default function TopBar() {
	return (
		<div className="topbar-container">
			<MotionHoverScaleDrag>
				<span className="topbar-abbreviation">
					<span className="topbar-firstchar">T</span>P
				</span>
			</MotionHoverScaleDrag>

			<span className="topbar-flex-grow"></span>

			<span className="topbar-toggle">
				<Toggle />
			</span>
		</div>
	);
}
