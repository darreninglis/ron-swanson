import React from 'react';
import SoundComponent from './Sound';

// images
import ron from '../images/ron.png';
import playButton from '../images/button.png';
import steak from '../images/steak.svg';

// sounds
import giggle from '../sounds/ron_swanson_giggle.mp3';
import joke from '../sounds/tax_joke.mp3';
import at_doctor from '../sounds/at_doctor.mp3';
import bacon_and_eggs from '../sounds/bacon_and_eggs.mp3';
import beaurocrat from '../sounds/beaurocrat.mp3';
import born_ready from '../sounds/born_ready.mp3';
import cake from '../sounds/cake.mp3';
import chummy from '../sounds/chummy.mp3';
import currency from '../sounds/currency.mp3';
import dentist from '../sounds/dentist.mp3';
import fishing_yoga from '../sounds/fishing_yoga.mp3';
import frozen_yoghurt from '../sounds/frozen_yoghurt.mp3';
import hangover from '../sounds/hangover.mp3';
import hernia from '../sounds/hernia.mp3';
import honeymoon from '../sounds/honeymoon.mp3';
import i_know_more_than_you from '../sounds/i_know_more_than_you.mp3';
import party_platter from '../sounds/party_platter.mp3';
import ribs from '../sounds/ribs.mp3';
import say_no from '../sounds/say_no.mp3';
import skim_milk from '../sounds/skim_milk.mp3';
import swansons from '../sounds/swansons.mp3';
import talk_back from '../sounds/talk_back.mp3';
import veganisim from '../sounds/veganisim.mp3';

class Ron extends React.Component {
	sounds = [
		veganisim,
		frozen_yoghurt,
		talk_back,
		dentist,
		beaurocrat,
		fishing_yoga,
		party_platter,
		bacon_and_eggs,
		at_doctor,
		currency,
		born_ready,
		hangover,
		joke,
		cake,
		giggle,
		skim_milk,
		chummy,
		hernia,
		honeymoon,
		i_know_more_than_you,
		ribs,
		say_no,
		swansons
	];
	state = {
		status: 'STOPPED',
		sound: '',
		soundCount: -1
	};

	handleClick = (e) => {
		this.playSound();
	};

	playSound = () => {
		let i = this.state.soundCount;
		console.log(this.sounds.length);
		if (i < this.sounds.length - 1) {
			i++;

			let sound = this.sounds[i];

			this.setState({
				sound: sound,
				soundCount: i,
				status: 'PLAYING'
			});
		} else {
			this.setState({ soundCount: -1, sound: '' });
		}
	};

	render() {
		const { status, sound } = this.state;

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

				<SoundComponent status={status} soundEffect={sound} />
				<footer>
					Made with <img src={steak} className='steak' alt='steak' />{' '}
					by <br />
					<a
						href='https://www.darreninglis.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						Darren Inglis
					</a>
				</footer>
			</div>
		);
	}
}
export default Ron;
