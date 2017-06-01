module.exports = {
	'extends': [
		'eslint-config-airbnb/base'
	].map(require.resolve),
	'parserOptions': {
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true
		}
	},
	'rules': {
		'arrow-parens': [2, 'as-needed'],
		'no-plusplus': [2, {'allowForLoopAfterthoughts': true}],
		'no-mixed-operators': [2, {'allowSamePrecedence': true}]
	}
};
