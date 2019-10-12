import React from 'react';

import { InboxItem } from './inbox-item';
import { ListItemBar } from './list-item-bar';

import './inbox-view.css';

export function InboxView(props) {
	const { posts, onItemClick } = props;

	if (!posts) {
		return (
			<div className="InboxView">
				<h1>Future blank state view</h1>
			</div>
		);
	}

	const postsList = posts.map((post) => {
		return <InboxItem key={ post.data.id } id={ post.data.id } { ...post.data } onItemClick={ () => onItemClick(post) } />;
	});

	return (
		<div className="InboxView">
			<ListItemBar />

			{ postsList }
		</div>
	);
}
