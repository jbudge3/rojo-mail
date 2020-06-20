import React from 'react';
import MaterialIcon from 'material-icons-react';

import { SideBarItem } from './side-bar-item';

import './side-bar.css';

export function SideBar () {
	return (
		<div className='SideBar'>
			<div className='SideBar__compose'>
				<MaterialIcon icon='add' />
				<p>Compose</p>
			</div>
			<div className='SideBar--selected'>
				<SideBarItem icon='inbox' showCount={true} text='Inbox' />
			</div>
			<SideBarItem icon='star' text='Starred' />
			<SideBarItem icon='watch_later' text='Snoozed' />
			<SideBarItem icon='send' text='Sent' />
			<SideBarItem icon='insert_drive_file' text='Drafts' />
			<SideBarItem icon='keyboard_arrow_down' text='More' />
		</div>
	);
}
