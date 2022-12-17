import React from 'react';
import PGF from '../../images/pnf.jpg';
import './PageNotFound.scss';

const PageNotFound = () => {
	return (
		<div className='page-not-found'>
			<img src={PGF} alt='PageNotFound' />
		</div>
	);
};

export default PageNotFound;
