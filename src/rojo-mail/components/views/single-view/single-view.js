
import React from 'react';
import Button from '@material-ui/core/Button';
import MaterialIcon from 'material-icons-react';

import moment from 'moment';

import { SingleItemBar } from '../single-view/single-item-bar';


import './single-view.css';

export function SingleView(props) {

	const { onBack, post } = props;

	if (!post) {
		return null;
	}

	const { data } = post;

	console.log('post', post);

	const time = moment.unix(data.created_utc).utc();
	const timeCreated = time.format('MMM, D YYYY, h:m a');
	const timeAgo = time.fromNow();

	return (
		<div className="SingleView">
			<SingleItemBar onBack={ onBack } />

			<div className="SingleViewContent">
				<div className="SingleViewContent__title">{ data.title }</div>
				
				<div className="SingleViewContent__Row">
					<div className="SingleViewContent__author">{ data.author }</div>
					<div className="SingleViewContent__created">{ timeCreated } ({ timeAgo })</div>
				</div>

				<div className="SingleViewContent__subreddit">{ data.subreddit_name_prefixed }</div>
				<div className="SingleViewContent__content">{ data.selftext }</div>

				<div className="SingleViewContent__content">{ data.selftext_html }</div>
			</div>
				
			<div className="SingleViewFooter">
				<Button variant="outlined">
					<MaterialIcon icon="reply" />
					Reply	
				</Button>
				
				<Button variant="outlined">
					<MaterialIcon icon="reply_all" />
					Reply All
				</Button>

				<Button variant="outlined">
					<MaterialIcon icon="forward" />
					Forward
				</Button>
			</div>
		</div>
	);
}
