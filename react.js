module.exports = {
	'extends': 'airbnb/rules/react',
	'rules': {
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
