import React, { useState } from 'react';
import MaterialIcon from 'material-icons-react';

import './inbox-item.css';

export function InboxItem(props) {
	const {
		title,
	} = props;

	const [hasBeenClicked, setHasBeenClicked] = useState(false);
	const [isHovering, setIsHovering] = useState(false);

	const InboxItemClass = hasBeenClicked ? 'InboxItem InboxItem--clicked' : 'InboxItem';

	return (
		<div
			className={ InboxItemClass }
			onClick={ () => setHasBeenClicked(true) }
			// onMouseOver={ () => setIsHovering(true) }
			// onMouseLeave={ () => setIsHovering(false) } >
		>
			<span className="InboxItem__square">
				<MaterialIcon icon="crop_square" />
			</span>

			<span className="InboxItem__star">
				<MaterialIcon icon="star_border" />
			</span>
			
			<p className="InboxItem__title">
				{ title }
			</p>

			{ /* this is having a strange issue, but would be cool when working! */ }
			{ isHovering ? (
				<div className="InboxItem__hoverItems">
					<MaterialIcon icon="star_border" />
					<MaterialIcon icon="star_border" />
					<MaterialIcon icon="star_border" />
					<MaterialIcon icon="star_border" />
				</div>
			) : (
				<p className="InboxItem__date">
					Aug 8th
				</p>
			) } 
		</div>
	);
}
