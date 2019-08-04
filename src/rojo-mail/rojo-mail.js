import React, { Component } from 'react';
import axios from 'axios';

import { TopBar } from './components/top-bar';
import { SideBar } from './components/side-bar';
import { Inbox } from './components/inbox';

import './rojo-mail.css';

export class RojoMail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			subreddit: '',
			data: null
		};
	}

	_handleSearchInputChange = (event) => this.setState({subreddit: event.target.value});

	_handleSearchSubmit = () => {
		const { subreddit } = this.state;
		const request = `https://www.reddit.com/r/${ subreddit }.json?limit=100`;

		axios.get(request)
		.then((response) => {
			const {
				status,
				data,
			} = response;

			if (status === 200) {
				this.setState({data: data.data});
			}
		});

	}

	render() {
		const {
			subreddit,
			data,
		} = this.state;

		const posts = data ? data.children : null;

		return (
			<div className="RojoMail">
				<TopBar
					searchVal={ subreddit }
					onSearchChange={ this._handleSearchInputChange }
					onSearchSubmit={ this._handleSearchSubmit }
				/>

				<div className="RojoMail__main">
					<SideBar />
					<Inbox posts={ posts } />
				</div>
			</div>
		);
	}
}
