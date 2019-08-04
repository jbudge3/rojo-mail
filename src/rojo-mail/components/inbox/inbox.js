import React from 'react';

import { InboxItem } from './inbox-item';

export function Inbox(props) {
	const { posts } = props;

	if (!posts) {
		return (
			<div className="Inbox">
				<h1>Future blank state view</h1>
			</div>
		);
	}

	const postsList = posts.map(post => <InboxItem key={ post.data.id } { ...post.data } />);

	return (
		<div className="Inbox">
			{ postsList }
		</div>
	)
}
