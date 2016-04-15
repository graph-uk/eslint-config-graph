# eslint-config-graph

This package provides ESLint config according to the Graph styleguide, which is based on [AirBnB](https://github.com/airbnb/javascript).

## Usage

To install package run `npm install eslint-config-graph --save-dev`

We export three ESLint configurations for your usage.

### graph (ES6+)

Add `"extends": "graph"` to your .eslintrc

### graph/legacy (ES5 and below)

Add `"extends": "graph/legacy"` to your .eslintrc

### graph/react (React)

Add `"extends": "graph/react"` to your .eslintrc

If you want to use ES6+ with React:

```json
"extends": [
    "graph",
    "graph/react"
]
```
