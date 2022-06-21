import React, { useEffect, useState } from 'react';

import { fetchData } from '../../utils/http';

export const PostComments = props => {
	const [comments, setComments] = useState(null);

	useEffect(() => {
		if (!props.post) return;

		const fullPostUrl = `https://api.reddit.com${props.post.permalink}.json`;

		fetchData(fullPostUrl).then(comments => {
			setComments(comments[1].data.children);
		});
	}, []);

	if (!comments) {
		return <div>Loading Comments</div>;
	}

	const subredditString = `<${props.post.subreddit_name_prefixed}>`;

	return comments.map(comment => {
		return (
			<div className='SingleViewCommment' key={comment.data.id}>
				<div className='SingleViewContent__Row'>
					<div className='SingleViewContent__author'>
						{comment.data.author}
						<span className='SingleViewContent__subreddit'>
							{subredditString}
						</span>
						<div className='SingleViewContent__toMe'>to me</div>
					</div>
				</div>

				<div className='SingleViewContent__content'>
					{comment.data.body}
				</div>
			</div>
		);
	});
};
