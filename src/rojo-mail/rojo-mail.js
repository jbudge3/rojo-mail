import React, { Component } from 'react';
import axios from 'axios';

import { TopBar } from './components/top-bar';
import { SideBar } from './components/side-bar';
import { InboxView } from './components/views/inbox-view';
import { SingleView } from './components/views/single-view';

import './rojo-mail.css';

const BASE_URL = 'https://www.reddit.com';
const LIMIT = 20;

export class RojoMail extends Component {
	constructor (props) {
		super(props);

		this.state = {
			subreddit: '',
			posts: null,
			post: null,
			view: 'list' // list, single
		};
	}

	_handleOnBackToListView = () => {
		this.setState({
			view: 'list',
			post: null
		});
	};

	_handleChangeToInboxView = post => {
		this.setState({
			view: 'single',
			post
		});
	};

	_handleSearchInputChange = event =>
		this.setState({ subreddit: event.target.value });

	_handleSearchSubmit = () => {
		const { subreddit } = this.state;
		const request = `${BASE_URL}/r/${subreddit}.json?limit=${LIMIT}`;

		axios
			.get(request)
			.then(response => {
				this.setState({ posts: response.data.data, view: 'list' });
			})
			.catch(error => {
				console.log('er', error);
			});
	};

	componentWillMount = () => {
		axios
			.get(`${BASE_URL}/.json?limit=${LIMIT}`)
			.then(response => {
				this.setState({ posts: response.data.data });
			})
			.catch(error => {
				console.log('er', error);
			});
	};

	render () {
		const { subreddit, posts, post, view } = this.state;

		const redditPosts = posts ? posts.children : null;

		return (
			<div className='RojoMail'>
				<TopBar
					onSearchChange={this._handleSearchInputChange}
					onSearchSubmit={this._handleSearchSubmit}
					searchVal={subreddit}
				/>

				<div className='RojoMail__main'>
					<SideBar />

					<div className='RojoMail__content'>
						{view === 'single' && (
							<SingleView
								onBack={this._handleOnBackToListView}
								post={post}
							/>
						)}
						{view === 'list' && (
							<InboxView
								onItemClick={this._handleChangeToInboxView}
								posts={redditPosts}
							/>
						)}
					</div>
				</div>
			</div>
		);
	}
}
