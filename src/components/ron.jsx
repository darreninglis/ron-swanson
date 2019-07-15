import React from 'react';
import SoundComponent from './Sound';

// images
import ron from '../images/ron.png';
import playButton from '../images/button.png';
import steak from '../images/steak.svg';

// sounds
import giggle from '../sounds/ron_swanson_giggle.mp3';
import joke from '../sounds/tax_joke.mp3';
import breakfast from '../sounds/breakfast.mp3';
import at_doctor from '../sounds/at_doctor.mp3';
import bacon_and_eggs from '../sounds/bacon_and_eggs.mp3';
import beaurocrat from '../sounds/beaurocrat.mp3';
import born_ready from '../sounds/born_ready.mp3';
import cake from '../sounds/cake.mp3';
import capitalisim from '../sounds/capitalisim.mp3';
import chummy from '../sounds/chummy.mp3';
import currency from '../sounds/currency.mp3';
import dentist from '../sounds/dentist.mp3';
import fish from '../sounds/fish.mp3';
import fishing_yoga from '../sounds/fishing_yoga.mp3';
import frozen_yoghurt from '../sounds/frozen_yoghurt.mp3';
import hangover from '../sounds/hangover.mp3';
import hernia from '../sounds/hernia.mp3';
import honeymoon from '../sounds/honeymoon.mp3';
import hostile_witness from '../sounds/hostile_witness.mp3';
import i_know_more_than_you from '../sounds/i_know_more_than_you.mp3';
import no_steak from '../sounds/no_steak.mp3';
import party_platter from '../sounds/party_platter.mp3';
import ribs from '../sounds/ribs.mp3';
import salad from '../sounds/salad.mp3';
import say_no from '../sounds/say_no.mp3';
import shaved_stash from '../sounds/shaved_stash.mp3';
import skim_milk from '../sounds/skim_milk.mp3';
import swansons from '../sounds/swansons.mp3';
import talk_back from '../sounds/talk_back.mp3';
import teach_a_man_to_fish from '../sounds/teach_a_man_to_fish.mp3';
import veganisim from '../sounds/veganisim.mp3';

class Ron extends React.Component {
	sounds = [
		joke,
		giggle,
		breakfast,
		at_doctor,
		bacon_and_eggs,
		beaurocrat,
		born_ready,
		cake,
		capitalisim,
		chummy,
		currency,
		dentist,
		fish,
		fishing_yoga,
		frozen_yoghurt,
		hangover,
		hernia,
		honeymoon,
		hostile_witness,
		i_know_more_than_you,
		no_steak,
		party_platter,
		ribs,
		salad,
		say_no,
		shaved_stash,
		skim_milk,
		swansons,
		talk_back,
		teach_a_man_to_fish,
		veganisim
	];
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
					<a href='https://www.darreninglis.com' target='_blank'>
						Darren Inglis
					</a>
				</footer>
			</div>
		);
	}
}
export default Ron;
