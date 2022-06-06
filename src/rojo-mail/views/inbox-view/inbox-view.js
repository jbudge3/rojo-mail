import React from 'react';

import { InboxItem } from '../../components/InboxItem';
import { InboxBackBar } from '../../components/InboxBackBar';

import './inbox-view.css';

export function InboxView (props) {
	const { posts, onItemClick } = props;

	if (!posts) {
		return (
			<div className='InboxView'>
				<h1>Future blank state view</h1>
			</div>
		);
	}

	const getPosts = () => {
		return posts.map(post => {
			return (
				<InboxItem
					key={post.data.id}
					{...post.data}
					onItemClick={() => onItemClick(post)}
				/>
			);
		});
	};

	return (
		<div className='InboxView'>
			<InboxBackBar />

			{getPosts()}
		</div>
	);
}
