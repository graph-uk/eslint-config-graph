const parents = [
	'eslint-config-graph-base',
	'eslint-config-airbnb/rules/react',
	'eslint-config-airbnb/rules/react-hooks'
];

module.exports = {
	extends: parents.map(require.resolve),
	rules: {
		'react/forbid-prop-types': ['error', {
			'forbid': ['any']
		}],
		'react/jsx-closing-bracket-location': ['error', {
			'nonEmpty': 'tag-aligned',
			'selfClosing': 'tag-aligned'
		}],
		'react/jsx-first-prop-new-line': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-space-before-closing': ['off', 'never'],
		'react/jsx-tag-spacing': ['error', {
			'closingSlash': 'never',
			'beforeSelfClosing': 'allow',
			'afterOpening': 'never'
		}],
		'react/no-array-index-key': 'off',
		'react/no-unused-prop-types': ['error', {
			'skipShapeProps': true
		}],
		'react/prefer-stateless-function': 'off',
		'react/require-default-props': 'off',
		'react/sort-comp': ['error', {
			'order': [
				'lifecycle',
				'render',
				'/^render.+$/',
				'/^on.+$/',
				'/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
				'everything-else'
			],
			'groups': {
				'lifecycle': [
					'displayName',
					'statics',
					'propTypes',
					'contextTypes',
					'childContextTypes',
					'mixins',
					'defaultProps',
					'constructor',
					'getInitialState',
					'getStateFromFlux',
					'getDefaultProps',
					'getChildContext',
					'componentWillMount',
					'componentDidMount',
					'componentWillReceiveProps',
					'shouldComponentUpdate',
					'componentWillUpdate',
					'componentDidUpdate',
					'componentWillUnmount'
				]
			}
		}]
	}
};
