
import React from 'react';
import Button from '@material-ui/core/Button';

import { SingleItemBar } from '../single-view/single-item-bar';


import './single-view.css';

export function SingleView(props) {

	const { onBack } = props;

	return (
		<div className="SingleView">
			<SingleItemBar onBack={ onBack } />

			<div className="SingleViewContent">
				<div className="SingleViewContent__title">Thread Title</div>
				<div className="SingleViewContent__author">I'm the author</div>
				<div className="SingleViewContent__content">Alll the content hereeeeeee!!!</div>

			</div>
				
			<div className="SingleViewFooter">
				<Button variant="outlined">
					Reply	
				</Button>

				<Button variant="outlined">
					Forward
				</Button>
			</div>
		</div>
	);
}
