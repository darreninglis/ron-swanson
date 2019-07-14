import React from 'react';
import SoundComponent from './Sound';

// images
import ron from '../images/ron.png';
import playButton from '../images/button.png';
import steak from '../images/steak.svg';

// sounds
import giggle from '../sounds/ron_swanson_giggle.mp3';
import joke from '../sounds/tax_joke.mp3';

// TODO:
// > wiggle play button to get attention
// > add more sounds -> check if mobileLimit is affecting phone on cell network

// > Optional: display sound effect title in <p></p> below button
// > Optional: Animate swanson image while playing / change color - shake moustache?
// > Optional: optimise sound file sizes
// > Optional: show progress bar for sound length
// > Optional: take audio clips off site and call them with axios firebase?
// > Optional: disable play button while playing
// > Optoinal: mute button

// TODO:

class Ron extends React.Component {
	sounds = [joke, giggle];
	state = {
		status: 'STOPPED',
		randomSound: '',
		lastRandomSound: ''
	};

	handleClick = (e) => {
		this.getRandomSoundEffect();
	};

	getRandomSoundEffect = () => {
		let randomSound = this.sounds[
			Math.floor(Math.random() * this.sounds.length)
		];

		if (randomSound === this.state.lastRandomSound) {
			// randomSong
			this.getRandomSoundEffect();
		} else {
			this.setState({
				randomSound: randomSound,
				lastRandomSound: randomSound,
				status: 'PLAYING'
			});
		}
	};

	render() {
		const { status, randomSound } = this.state;

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

				<SoundComponent status={status} soundEffect={randomSound} />
				<footer>
					Made with <img src={steak} className='steak' alt='steak' />{' '}
					by <br />
					<a href='darreninglis.com' target='_blank'>
						Darren Inglis
					</a>
				</footer>
			</div>
		);
	}
}
export default Ron;
