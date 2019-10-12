import React, { useState } from 'react';
import MaterialIcon from 'material-icons-react';
import moment from 'moment';

import { Attachment } from '../attachment';

import './inbox-item.css';

export function InboxItem(props) {
	const {
		title,
		created_at,
	} = props;

	const [hasBeenClicked, setHasBeenClicked] = useState(false);

	const InboxItemClass = hasBeenClicked ? 'InboxItem InboxItem--clicked' : 'InboxItem';

	let createdAtDate = moment(created_at).format('MMM D');
	const hasAttachments = false;

	const handleClick = () => {
		const { onItemClick } = props;

		onItemClick();
		setHasBeenClicked(true);
	};

	return (
		<div
			className={ InboxItemClass }
			onClick={ handleClick }
		>
			<div className="InboxItem__main">
				<span className="InboxItem__square">
					<MaterialIcon icon="crop_square" />
				</span>

				<span className="InboxItem__star">
					<MaterialIcon icon="star_border" />
				</span>
				
				<p className="InboxItem__title">
					{ title }
				</p>
				
				<p className="InboxItem__date">
					{ createdAtDate }
				</p>
			</div>

			{ hasAttachments && (
				<div className="InboxItem__attachments">
					<Attachment />
				</div>
			) }
		</div>
	);
}
