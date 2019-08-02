import React from 'react';
import MaterialIcon from 'material-icons-react';

import './top-bar.css';

export function TopBar(props) {
	const {
		searchVal,
		onSearchChange,
	} = props;

	return (
		<div className="TopBar">
			<MaterialIcon icon="menu" />

			<span className="TopBar__headerContainer">
				<MaterialIcon icon="mail" />
				<h3 className="TopBar__header">RojoMail</h3>
			</span>

			<div className="TopBar__searchContainer">
				<span className="TopBar__searchIcon">
					<MaterialIcon icon="search" />
				</span>

				<input
					className="TopBar__search"
					onChange={ onSearchChange }
					placeholder="Search for subreddit"
					type="text"
					value={ searchVal }
				/>
			</div>

			<div clasname="TopBar__icons">
				<MaterialIcon icon="help_outline" />
				<MaterialIcon icon="apps" />
			</div>
		</div>
	);
}
