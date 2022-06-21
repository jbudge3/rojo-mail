import React, { useEffect, useState } from 'react';

import moment from 'moment';
import MaterialIcon from 'material-icons-react';

import { SingleItemBar } from '../../components/SingleItemBar';
import { PostComments } from '../../components/PostComments';
import { EmailButton } from '../../components/EmailButton';

import { fetchData } from '../../utils/http';

import './Post.css';

export function Post (props) {
	const { onBack, post } = props;
	const { data } = post;

	if (!post) {
		return null;
	}

	const time = moment.unix(data.created_utc).utc();
	const timeCreated = time.format('MMM, D YYYY, h:m a');
	const timeAgo = time.fromNow();
	const subredditString = `<${data.subreddit_name_prefixed}>`;

	return (
		<div className='SingleView'>
			<SingleItemBar onBack={onBack} />

			<div className='SingleViewContainer'>
				<div className='SingleViewContent'>
					<div className='SingleViewContent__title'>{data.title}</div>

					<div className='SingleViewContent__Row'>
						<div className='SingleViewContent__icon'>
							<MaterialIcon
								icon='account_circle'
								size='large'
								invert={true}
								color='#CCCCCC'
							/>
						</div>

						<div className='SingleViewContent__author'>
							{data.author}
							<span className='SingleViewContent__subreddit'>
								{subredditString}
							</span>
							<div className='SingleViewContent__toMe'>to me</div>
						</div>

						<div className='SingleViewContent__created'>
							{timeCreated} ({timeAgo})
						</div>
					</div>

					{data.media && data.media.reddit_video.fallback_url && (
						<video controls={true}>
							<source
								src={
									data.secure_media.reddit_video.fallback_url
								}
								type='video/mp4'
							/>
						</video>
					)}

					<div className='SingleViewContent__content'>
						{data.selftext}
					</div>

					<div className='SingleViewContent__content'>
						comments {data.num_comments}
					</div>
					<div className='SingleViewContent__content'>
						upvotes {data.score}
					</div>
					<div className='SingleViewContent__content'>
						<a
							href={data.url}
							target='_blank'
							rel='noopener noreferrer'
						>
							perma link
						</a>
					</div>
				</div>
			</div>

			<PostComments post={data} />

			<div className='SingleViewFooter'>
				<EmailButton icon='reply' text='Reply' />
				<EmailButton icon='reply_all' text='Reply All' />
				<EmailButton icon='forward' text='Forward' />
			</div>
		</div>
	);
}
