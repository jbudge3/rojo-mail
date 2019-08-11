import React from 'react';

import MaterialIcon from 'material-icons-react';

import './list-item-bar.css';

export function ListItemBar(props) {
	return (
		<div className="ListItemBar">
			<MaterialIcon icon="crop_square" />
			<MaterialIcon icon="arrow_drop_down" />
			<MaterialIcon icon="refresh" />
			<MaterialIcon icon="more_vert" />
		</div>
	);
}
