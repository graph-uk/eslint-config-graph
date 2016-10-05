module.exports = {
	'extends': [
		'eslint-config-airbnb/base'
	].map(require.resolve),
	'parserOptions': {
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true
		}
	}
};
