
import React from 'react';
import MaterialIcon from 'material-icons-react';

import './attachment.css';

export function Attachment(props) {

	return (
		<div className="Attachment__pill">
			<span className="Attachment__icon">
				<MaterialIcon icon="attachment" />
			</span>
			<p className="Attachment__fileName">File name</p>
		</div>
	);
}
