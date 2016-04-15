module.exports = {
	'extends': [
		'airbnb/legacy'
	],
	'rules': {
		'indent': [2, 'tab', {
			'SwitchCase': 1
		}],
		'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
		'no-multi-spaces': [2, {
			'exceptions': {
				'JSXOpeningElement': true
			}
		}],
		'space-before-function-paren': [2, {
			'anonymous': 'always',
			'named': 'never'
		}],
		'no-multiple-empty-lines': [2, {
			'max': 1
		}],
		'newline-after-var': [2, 'always'],
		'one-var': [2, {
			'initialized': 'never',
			'uninitialized': 'always'
		}],
		'one-var-declaration-per-line': [2, 'initializations'],
		'brace-style': [2, '1tbs', {
			'allowSingleLine': false
		}],
		'comma-dangle': [2, 'never'],
		'new-cap': [2, {
			'newIsCap': true,
			'capIsNew': false
		}],
		'no-unused-expressions': [2, {
			'allowTernary': true
		}],
		'object-curly-spacing': [2, 'never'],
		'func-names': 0,
		'default-case': 0,
		'no-param-reassign': 0,
		'max-len': 0,
		'consistent-return': 0
	}
};
