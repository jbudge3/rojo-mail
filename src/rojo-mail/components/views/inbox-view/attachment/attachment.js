import React from 'react';
import MaterialIcon from 'material-icons-react';

import './attachment.css';

export function Attachment (props) {
	const { source } = props;

	// Gotta fix the &amp; crap.
	const url = source.url.replace(/&amp;/g, '&');

	return (
		<div className='Attachment__pill'>
			<span className='Attachment__icon'>
				<MaterialIcon icon='attachment' />
			</span>
			<p className='Attachment__fileName'>File name here..</p>

			<div className='Attachment__image'>
				<span className='Attachment__preview'>
					<img
						alt='preview'
						height={source.height}
						src={url}
						width={source.width}
					/>
				</span>
			</div>
		</div>
	);
}
