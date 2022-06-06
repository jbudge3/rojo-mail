import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

import { TopBar } from './components/TopBar';
import { SideBar } from './components/SideBar';
import { InboxView } from './components/views/inbox-view';
import { SingleView } from './components/views/single-view';

import './rojo-mail.css';

const BASE_URL = 'https://www.reddit.com';
const LIMIT = 20;

export const RojoMail = () => {
	const [subReddit, setSubReddit] = useState('');
	const [post, setPost] = useState({});
	const [posts, setPosts] = useState([]);
	const [view, setView] = useState('list'); // list, single

	useEffect(() => {
		axios
			.get(`${BASE_URL}/.json?limit=${LIMIT}`)
			.then(response => {
				setPosts(response.data.data);
			})
			.catch(error => {
				console.log('er', error);
			});
	}, []);

	const _handleOnBackToListView = () => {
		setView('list');
		setPost({});
	};

	const _handleChangeToInboxView = post => {
		setView('single');
		setPost(post);
	};

	const _handleSearchInputChange = event => setSubReddit(event.target.value);

	const _handleSearchSubmit = () => {
		const request = `${BASE_URL}/r/${subReddit}.json?limit=${LIMIT}`;

		axios
			.get(request)
			.then(response => {
				setView('list');
				setPosts(response.data.data);
			})
			.catch(error => {
				console.log('er', error);
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
						<SingleView
							onBack={_handleOnBackToListView}
							post={post}
						/>
					)}
					{view === 'list' && (
						<InboxView
							onItemClick={_handleChangeToInboxView}
							posts={redditPosts}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
