import React, { Component } from 'react';

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

	render() {
		const {
			url,
			data,
		} = this.state;

		return (
			<div className="RojoMail">
				<TopBar searchVal={ url } onSearchChange={ this._handleSearchInputChange } />
			</div>
		);
	}
}
