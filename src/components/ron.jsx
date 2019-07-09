import React from 'react';
import SoundComponent from './Sound';

// images
import ron from '../images/ron.png';
import playButton from '../images/button.png';

// sounds
import giggle from '../sounds/ron_swanson_giggle.mp3';
import joke from '../sounds/tax_joke.mp3';

// TODO:
// > add more sounds
// > disable mobile limit in SoundManagerConfig (see docs in chrome bookmarks bar)
// > check if nextSound is equal to currentSound and redraw if it is
// > mute button
// > wiggle play button to get attention

// > Optional: display sound effect title in <p></p> below button
// > Optional: Animate swanson image while playing / change color - shake moustache?
// > Optional: optimise sound file sizes
// > Optional: show progress bar for sound length
// > Optional: take audio clips off site and call them with axios firebase?
// > Optional: disable play button while playing

class Ron extends React.Component {
	sounds = [giggle, joke];

	state = {
		status: 'STOPPED'
	};

	handleClick = (e) => {
		this.setState({ status: 'PLAYING' });
		console.log(this.getRandomSoundEffect());
	};

	getRandomSoundEffect = () => {
		let randomSound = this.sounds[
			Math.floor(Math.random() * this.sounds.length)
		];
		return randomSound;
	};

	render() {
		return (
			<div className='ron-header'>
				<img src={ron} className='ron-head' alt='ron' />
				<h2>The Ron... The Swanson... The Ledgend!</h2>
				<img
					src={playButton}
					className='playButton'
					alt='play button'
					onClick={this.handleClick}
				/>
				<SoundComponent
					status={this.state.status}
					soundEffect={this.getRandomSoundEffect()}
				/>
			</div>
		);
	}
}
export default Ron;
