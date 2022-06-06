import React from 'react';

// @ts-ignore
import MaterialIcon from 'material-icons-react';

import './SideBarItem.css';

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
