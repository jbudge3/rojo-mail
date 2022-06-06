import React from 'react';

import { InboxItem } from '../../components/InboxItem';
import { InboxTopBar } from '../../components/InboxTopBar';

import './Inbox.css';

export function Inbox (props) {
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
			console.log('post', post);
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
			<InboxTopBar />

			{getPosts()}
		</div>
	);
}
