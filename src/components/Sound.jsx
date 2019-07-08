import React from 'react';
import Sound from 'react-sound';

class SoundComp extends React.Component {
	render() {
		return (
			<Sound
				// url='cool_sound.mp3'
				url={this.props.soundEffect}
				// playStatus={Sound.status.PLAYING}
				playStatus={this.props.status}
				playFromPosition={30 /* in milliseconds */}
				onLoading={this.handleSongLoading}
				onPlaying={this.handleSongPlaying}
				onFinishedPlaying={this.handleSongFinishedPlaying}
			/>
		);
	}
}

export default SoundComp;
