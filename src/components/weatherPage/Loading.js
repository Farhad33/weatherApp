import React from 'react';
import './loading.sass';

export const Loading = ({ lines }) => (
	<div className='text-input__loading'>
		{Array.from({ length: lines }, (_, idx) => `${++idx}`).map(line => (
			<div
				key={line}
				className='text-input__loading--line'>
			</div>
		))}
	</div>
);
