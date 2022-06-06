import React from 'react';
import MaterialIcon from 'material-icons-react';

import './TopBar.css';

export function TopBar (props) {
	const { searchVal, onSearchChange, onSearchSubmit } = props;

	const handleKeyDown = (event, callback) => {
		if (event.key === 'Enter') {
			callback();
		}
	};

	return (
		<div className='TopBar'>
			<div className='TopBar__left'>
				<MaterialIcon icon='menu' />

				<span className='TopBar__headerContainer'>
					<MaterialIcon icon='mail' />
					<h3 className='TopBar__header'>RojoMail</h3>
				</span>

				<div className='TopBar__searchContainer'>
					<span className='TopBar__searchIcon'>
						<MaterialIcon icon='search' />
					</span>

					<input
						className='TopBar__search'
						onChange={onSearchChange}
						onKeyDown={event =>
							handleKeyDown(event, onSearchSubmit)
						}
						placeholder='Search subreddit'
						spellCheck='false'
						type='text'
						value={searchVal}
					/>
				</div>
			</div>

			<div className='TopBar__right'>
				<span className='TopBar__icon'>
					<MaterialIcon icon='help_outline' />
				</span>

				<span className='TopBar__icon'>
					<MaterialIcon icon='apps' />
				</span>
			</div>
		</div>
	);
}
