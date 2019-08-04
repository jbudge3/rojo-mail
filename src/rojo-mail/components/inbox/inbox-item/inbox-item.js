import React from 'react';

import './inbox-item.css';

export function InboxItem(props) {
	const {
		title,
	} = props;

	return (
		<div className="InboxItem">
			<p className="InboxItem__title">
				{ title }
			</p>
		</div>
	)
}
