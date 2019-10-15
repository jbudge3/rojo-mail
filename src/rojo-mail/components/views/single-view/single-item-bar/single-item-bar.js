import React from 'react';

import MaterialIcon from 'material-icons-react';

import './single-item-bar.css';

export function SingleItemBar(props) {

	const { onBack } = props;

	return (
		<div className="SingleItemBar">
			<div className="SingleItemBar__leftColumn">
				<div className="SingleItemBar__backButton">
					<MaterialIcon icon="keyboard_backspace" onClick={ onBack } />
				</div>
				<MaterialIcon icon="archive" />
				<MaterialIcon icon="delete" />
				<MaterialIcon icon="watch_later" />
				<MaterialIcon icon="label" />
				<MaterialIcon icon="more_vert" />
			</div>
			<div className="SingleItemBar__rightColumn">
				<span className="SingleItemBar__text">1-50 of 1337</span>
				<MaterialIcon icon="keyboard_arrow_left" />
				<MaterialIcon icon="keyboard_arrow_right" />
				<MaterialIcon icon="keyboard" />
				<MaterialIcon icon="arrow_drop_down" />
				<MaterialIcon icon="settings" />
			</div>
		</div>
	);
}
