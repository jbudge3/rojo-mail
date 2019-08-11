import React from 'react';
import MaterialIcon from 'material-icons-react';

import './inbox-item.css';

export function InboxItem(props) {
	const {
		title
	} = props;

	return (
		<div className="InboxItem">
			<MaterialIcon icon="crop_square" />
			<MaterialIcon icon="star_border" />
			
			<p className="InboxItem__title">
				{ title }
			</p>
			<p className="InboxItem__date">
				Aug 8th
			</p>
		</div>
	);
}
