import React from 'react';

// @ts-ignore
import MaterialIcon, { colorPalette } from 'material-icons-react';

import './SideBarItem.css';

export function SideBarItem (props) {
	const { icon, text, showCount } = props;
	const iconColor = showCount ? colorPalette.red._600 : '';

	return (
		<div className='SideBarItem'>
			<MaterialIcon icon={icon} color={iconColor} />
			<p className='SideBarItem__text'>{text}</p>

			{showCount && <span className='SideBarItem__count'>107</span>}
		</div>
	);
}
