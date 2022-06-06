import React from 'react';

import MaterialIcon from 'material-icons-react';

import './InboxBackBar.css';

export function InboxBackBar (props) {
	return (
		<div className='ListItemBar'>
			<div className='ListItemBar__leftColumn'>
				<MaterialIcon icon='crop_square' />
				<span className='ListItemBar--flexGrow'>
					<MaterialIcon icon='arrow_drop_down' />
				</span>
				<MaterialIcon icon='refresh' />
				<MaterialIcon icon='more_vert' />
			</div>

			<div className='ListItemBar__rightColumn'>
				<span className='ListItemBar__text'>1-50 of 1337</span>
				<MaterialIcon icon='keyboard_arrow_left' />
				<MaterialIcon icon='keyboard_arrow_right' />
				<MaterialIcon icon='keyboard' />
				<MaterialIcon icon='arrow_drop_down' />
				<MaterialIcon icon='settings' />
			</div>
		</div>
	);
}
