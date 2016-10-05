module.exports = {
	'extends': [
		'eslint-config-airbnb/rules/react'
	].map(require.resolve),
	'rules': {
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-space-before-closing': [0, 'never'],
		'react/jsx-first-prop-new-line': 0,
		'react/jsx-closing-bracket-location': [2, {
			'nonEmpty': 'tag-aligned',
			'selfClosing': 'tag-aligned'
		}],
		'react/prefer-stateless-function': 0,
		'react/sort-comp': [2, {
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
