import React from 'react';
import MaterialIcon from 'material-icons-react';

import './side-bar-item.css';

export function SideBarItem (props) {
	const { icon, text, showCount } = props;

	return (
		<div className='SideBarItem'>
			<MaterialIcon icon={icon} />
			<p className='SideBarItem__text'>{text}</p>

			{showCount && <span className='SideBarItem__count'>107</span>}
		</div>
	);
}
