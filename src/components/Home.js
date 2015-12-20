var React = require('react');
var ChirpInput = require('./ChirpInput');
var ChirpList = require('./ChirpList');
var actions = require('../actions');
var ChirpStore = require('../stores/chirps');

var Home = React.createClass({
	getInitialState: function () {
		return {
			chirps: ChirpStore.timeline()
		};
	},
	mixins: [ChirpStore.mixin],
	onChange: function () {
		this.setState(this.getInitialState());
	},
	render: function () {
		return <div>
			<ChirpInput onSave={this.saveChirp} />
			<ChirpList chirps={this.state.chirps} />
		</div>;
	},
	saveChirp: function (text) {
		actions.chirp(text);
	}
});

module.exports = Home;
