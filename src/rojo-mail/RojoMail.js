import React, { Component, useEffect, useState } from 'react';

import { Inbox } from './views/Inbox';
import { Post } from './views/Post';

import { TopBar } from './components/TopBar';
import { SideBar } from './components/SideBar';

import { fetchData } from './utils/http';

import './RojoMail.css';

const BASE_URL = 'https://www.reddit.com';
const LIMIT = 20;

export const RojoMail = () => {
	const [subReddit, setSubReddit] = useState('');
	const [post, setPost] = useState({});
	const [posts, setPosts] = useState([]);
	const [view, setView] = useState('list'); // list, single
	const [seenPosts, setSeenPosts] = useState([]);

	useEffect(() => {
		const postsUrl = `${BASE_URL}/.json?limit=${LIMIT}`;

		fetchData(postsUrl).then(posts => {
			setPosts(posts.data);
		});
	}, []);

	const _handleOnBackToListView = () => {
		setView('list');
		setPost({});
	};

	const _handleChangeToInboxView = post => {
		setView('single');
		setPost(post);
		setSeenPosts(seenPosts => [...seenPosts, post.data.id]);
	};

	const _handleSearchInputChange = event => setSubReddit(event.target.value);

	const _handleSearchSubmit = () => {
		const subRedditUrl = `${BASE_URL}/r/${subReddit}.json?limit=${LIMIT}`;

		fetchData(subRedditUrl).then(posts => {
			setView('list');
			setPosts(posts.data);
		});
	};

	const redditPosts = posts ? posts.children : null;

	return (
		<div className='RojoMail'>
			<TopBar
				onSearchChange={_handleSearchInputChange}
				onSearchSubmit={_handleSearchSubmit}
				searchVal={subReddit}
			/>

			<div className='RojoMail__main'>
				<SideBar />

				<div className='RojoMail__content'>
					{view === 'single' && (
						<Post onBack={_handleOnBackToListView} post={post} />
					)}
					{view === 'list' && (
						<Inbox
							onItemClick={_handleChangeToInboxView}
							posts={redditPosts}
							seenPosts={seenPosts}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
