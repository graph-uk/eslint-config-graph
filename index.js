module.exports = {
	'extends': [
		'airbnb/rules/es6',
		'graph/legacy'
	],
	'ecmaFeatures': {
		'restParams': true,
		'experimentalObjectRestSpread': true
	},
	'rules': {
		'object-shorthand': [2, 'always']
	}
};
