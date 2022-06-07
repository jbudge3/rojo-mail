import React from 'react';
import MaterialIcon from 'material-icons-react';
import moment from 'moment';

import { Attachment } from '../Attachment';

import './InboxItem.css';

export function InboxItem (props) {
	const handleClick = () => {
		const { onItemClick } = props;

		onItemClick();
	};

	const renderAttachments = () => {
		const { preview } = props;

		if (!preview) {
			return null;
		}

		return (
			<div className='InboxItem__attachments'>
				{preview.images.map(image => {
					return <Attachment key={image.id} source={image.source} />;
				})}
			</div>
		);
	};

	const { title, created, alreadySeen } = props;

	let dateString;

	const isCurrentDate = moment(created).isSame(new Date(), 'day');
	if (isCurrentDate) {
		dateString = moment(created).format('hh:mm a');
	} else {
		dateString = moment(created).format('MMM D');
	}

	const itemClass = alreadySeen ? 'InboxItem InboxItem--seen' : 'InboxItem';

	return (
		<div className={itemClass} onClick={handleClick}>
			<div className='InboxItem__main'>
				<span className='InboxItem__square'>
					<MaterialIcon icon='crop_square' />
				</span>

				<span className='InboxItem__star'>
					<MaterialIcon icon='star_border' />
				</span>

				<p className='InboxItem__title'>{title}</p>

				<p className='InboxItem__date'>{dateString}</p>
			</div>

			{renderAttachments()}
		</div>
	);
}
