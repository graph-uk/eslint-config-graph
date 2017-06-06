const parents = [
	'eslint-config-airbnb-base'
];

module.exports = {
	extends: parents.map(require.resolve),
	env: {
		browser: true,
		node: true,
		amd: false,
		mocha: false,
		jasmine: false
	},
	rules: {
		// es6
		'arrow-parens': ['error', 'as-needed'],
		'prefer-template': 'off',

		// best practices
		'consistent-return': 'off',
		'default-case': 'off',
		'no-multi-spaces': ['error', {
			'exceptions': {
				'JSXOpeningElement': true
			}
		}],
		'no-param-reassign': 'off',
		'no-unused-expressions': ['error', {
			'allowTernary': true
		}],

		// errors
		'comma-dangle': ['error', 'never'],

		// imports
		'import/first': 'off',

		// node

		// style
		'brace-style': ['error', '1tbs', {
			'allowSingleLine': false
		}],
		'func-names': 'off',
		'indent': ['error', 'tab', {
			'SwitchCase': 1
		}],
		'linebreak-style': 'off',
		'max-len': 'off',
		'newline-after-var': ['error', 'always'],
		'no-mixed-operators': ['error', {
			'allowSamePrecedence': true
		}],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-multiple-empty-lines': ['error', {
			'max': 1
		}],
		'no-plusplus': ['error', {
			'allowForLoopAfterthoughts': true
		}],
		'no-tabs': 'off',
		'no-underscore-dangle': ['error', {
			'allowAfterThis': true
		}],
		'object-curly-spacing': ['error', 'never'],
		'one-var': ['error', {
			'initialized': 'never',
			'uninitialized': 'always'
		}],
		'one-var-declaration-per-line': ['error', 'initializations']

		// variables
	}
};
