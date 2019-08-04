import React from 'react';
import MaterialIcon from 'material-icons-react';

import './side-bar-item.css';

export function SideBarItem(props) {
	const {
		icon,
		text,
	} = props;

	return (
		<div className="SideBarItem">
			<MaterialIcon icon={ icon } />
			<p className="SideBarItem__text">{ text }</p>
		</div>
	)
}
