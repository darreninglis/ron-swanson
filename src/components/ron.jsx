import React from 'react';
import ron from '../images/ron.png';
import playButton from '../images/button.png';

export default function Ron() {
	const handleClick = (e) => {
		alert('Give me all of your bacon!');
	};

	// get random sound

	// play sound

	return (
		<div className='ron-header'>
			<img src={ron} className='ron-head' alt='ron' />
			<h2>The Ron... The Swanson... The Ledgend!</h2>
			<img
				src={playButton}
				className='playButton'
				alt='play button'
				onClick={handleClick}
			/>
		</div>
	);
}
