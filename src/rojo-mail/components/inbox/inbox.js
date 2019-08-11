import React from 'react';

import { InboxItem } from './inbox-item';
import { ListItemBar } from './list-item-bar';

export function Inbox(props) {
	const { posts } = props;

	if (!posts) {
		return (
			<div className="Inbox">
				<h1>Future blank state view</h1>
			</div>
		);
	}

	const postsList = posts.map((post) => {
		return <InboxItem key={ post.data.id } { ...post.data } />;
	});

	return (
		<div className="Inbox">
			<ListItemBar />

			{ postsList }
		</div>
	);
}
