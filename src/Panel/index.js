import React from 'react';
import { Link } from 'react-router';

const Panel = ({
	rootClass = 'panel',
	panelInnerYPosition = '',
	image,
	title = '',
	description = '',
	height = 300,
	linkTo = '/',
	loading
}) => {
		const renderReady = () => {
			return(
				<div>
					<h2 className="text-truncate m0 mb1">{title}</h2>
					<p className="text-truncate h5 m0">{description}</p>
				</div>
			)
		}
        
		const renderLoading = () => {
			return 'Loading...'
		}

		return(
			<Link className={rootClass} to={linkTo}>
				<div style={{height: height}}>
					{ image && !loading && <img className={`${rootClass}__image`} src={image} alt={title} /> }
					<div className={`${rootClass}__inner ${rootClass}__inner--${panelInnerYPosition}`}>
						{ loading ? renderLoading() : renderReady()  }
					</div>
				</div>
			</Link>
		)
};

export default Panel;