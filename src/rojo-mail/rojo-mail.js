import React, { Component } from 'react';
import axios from 'axios';

import { TopBar } from './components/top-bar';
import { SideBar } from './components/side-bar';
import { Inbox } from './components/inbox';
import { SingleView } from './components/single-view';

import './rojo-mail.css';

const BASE_URL = 'https://www.reddit.com';

export class RojoMail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			subreddit: '',
			posts: null,
			view: 'single'
		};
	}

	_handleOnBackToListView = () => {
		this.setState({ view: "list" });
	};

	_handleSearchInputChange = event => this.setState({subreddit: event.target.value});

	_handleSearchSubmit = () => {
		const { subreddit } = this.state;
		const request = `${ BASE_URL }/r/${ subreddit }.json?limit=100`;

		axios
			.get(request)
			.then((response) => {
				this.setState({ posts: response.data.data, view: "list" });
			})
			.catch((error) => {
				console.log("er", error);
			});
	}

	componentWillMount = () => {
		axios
			.get(`${ BASE_URL }/.json`)
			.then((response) => {
				this.setState({ posts: response.data.data });
			})
			.catch((error) => {
				console.log("er", error);
			});
	};

	render() {
		const {
			subreddit,
			posts,
			view
		} = this.state;

		const redditPosts = posts ? posts.children : null;

		return (
			<div className="RojoMail">
				<TopBar
					searchVal={ subreddit }
					onSearchChange={ this._handleSearchInputChange }
					onSearchSubmit={ this._handleSearchSubmit }
				/>

				<div className="RojoMail__main">
					<SideBar />
					{ view === "single" && <SingleView onBack={ this._handleOnBackToListView } /> }
					{ view === "list" && <Inbox posts={ redditPosts } /> }
				</div>
			</div>
		);
	}
}
