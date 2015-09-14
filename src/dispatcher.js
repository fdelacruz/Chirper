var flux = require('flux');

var Dispatcher = module.exports = new flux.Dispatcher();

Dispatcher.register(function (action) {
	console.log(action);
});
