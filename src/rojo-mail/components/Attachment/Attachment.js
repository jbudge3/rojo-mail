import React from 'react';
import MaterialIcon, { colorPalette } from 'material-icons-react';

import './Attachment.css';

const FILE_NAMES = [
	'Invoice-E653416',
	'Receipt-3210-0',
	'Performance',
	'IMG-34493',
	'Slides PPT'
];

export function Attachment (props) {
	const { source } = props;

	// Gotta fix the &amp; crap.
	const url = source.url.replace(/&amp;/g, '&');

	return (
		<div className='Attachment__pill'>
			<span className='Attachment__icon'>
				<MaterialIcon
					icon='picture_as_pdf'
					color={colorPalette.red._600}
				/>
			</span>
			<p className='Attachment__fileName'>
				{FILE_NAMES[Math.floor(Math.random() * FILE_NAMES.length)]}
			</p>

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
