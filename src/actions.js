var Dispatcher = require('./dispatcher');
var constants =  require('./constants');

Object.keys(constants).forEach(function (key) {

	var funcName = key.split('_').map(function (word, i) {
		if (i === 0) return word.toLowerCase(); // return first word lowercased
		return word[0] + word.slice(1).toLowerCase(); // return subsequent words camel-cased
	}).join(''); // join array back into a string

	exports[funcName] = function (data) {
		Dispatcher.dispatch({
			actionType: constants[key],
			data: data
		});
	};
});

// exports.chirp = function (data) {
// 	Dispatcher.dispatch({
// 		actionType: constants.CHIRP,
// 		data: data
// 	});
// };
