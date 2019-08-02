import React, { Component } from 'react';
import axios from 'axios';

import { TopBar } from './components/top-bar';

export class RojoMail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			url: '',
			data: null
		};
	}

	_handleSearchInputChange = (event) => this.setState({url: event.target.value});

	_handleSearchSubmit = () => {
		const { url } = this.state;
		const request = `https://reddit.com/${ url }.json`;

		axios.get(request)
		.then(response => console.log(response));

	}

	render() {
		const {
			url,
			data,
		} = this.state;

		return (
			<div className="RojoMail">
				<TopBar
					searchVal={ url }
					onSearchChange={ this._handleSearchInputChange }
					onSearchSubmit={ this._handleSearchSubmit }
				/>
			</div>
		);
	}
}
