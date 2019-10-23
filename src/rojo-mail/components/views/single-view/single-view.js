
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import MaterialIcon from 'material-icons-react';

import moment from 'moment';

import { SingleItemBar } from '../single-view/single-item-bar';


import './single-view.css';

export function SingleView(props) {

	const [comments, setComments] = useState([]);

	useEffect(() => {
		getComments();
	}, []);

	const getComments = () => {
		const { post } = props;

		if (!post) {
			return;
		}

		const commentsUrl = `${ post.data.url }.json`;

		axios
			.get(commentsUrl)
			.then((response) => {
				setComments(response.data[1].data.children);
			})
			.catch((error) => {
				console.log("er", error);
			});
	};

	const renderComments = () => {
		if (!comments || comments.length === 0) {
			return;
		}

		const commentList = comments.map((comment) => {
			const { data } = comment;

			return (
				<div className="SingleViewCommment" key={ data.id }>
					<div className="SingleViewContent__Row">
						<div className="SingleViewContent__author">
							{ data.author }
							<span className="SingleViewContent__subreddit">{ subredditString }</span>
							<div className="SingleViewContent__toMe">to me</div>
						</div>
					</div>

					<div className="SingleViewContent__content">
						{ data.body }
					</div>
				</div>
			);
		});

		return (
			<div className="SingleViewCommments">
				{ commentList }
			</div>
		);
	};

	const { onBack, post } = props;
	const { data } = post;

	if (!post) {
		return null;
	}

	const time = moment.unix(data.created_utc).utc();
	const timeCreated = time.format('MMM, D YYYY, h:m a');
	const timeAgo = time.fromNow();
	const subredditString = `<${ data.subreddit_name_prefixed }>`;

	return (
		<div className="SingleView">
			<SingleItemBar onBack={ onBack } />

			<div className="SingleViewContainer">
				<div className="SingleViewColumn">
					<MaterialIcon icon="account_circle" />
				</div>

				<div className="SingleViewContent">
					<div className="SingleViewContent__title">{ data.title }</div>

					<div className="SingleViewContent__Row">
						<div className="SingleViewContent__author">
							{ data.author }
							<span className="SingleViewContent__subreddit">{ subredditString }</span>
							<div className="SingleViewContent__toMe">to me</div>
						</div>

						<div className="SingleViewContent__created">{ timeCreated } ({ timeAgo })</div>
					</div>

					<div className="SingleViewContent__content">{ data.selftext }</div>

					<div className="SingleViewContent__content">comments { data.num_comments }</div>
					<div className="SingleViewContent__content">upvotes { data.score }</div>
					<div className="SingleViewContent__content"><a href={ data.url } target="_blank" rel="noopener noreferrer">perma link</a></div>
				</div>
			</div>

			{/* Turn this into its own component? */}
			{ renderComments() }

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
