# eslint-config-graph

[![npm version](https://img.shields.io/npm/v/eslint-config-graph.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-graph)

This package provides extended ESLint config according to the Graph styleguide, which is based on [AirBnB](https://github.com/airbnb/javascript).

## Installation

To install package run `npm install eslint-config-graph --save-dev`

## Configuration

Use a JSON file to specify configuration information for an entire directory and all of its subdirectories.
This can be in the form of an `.eslintrc.json` file or an `eslintConfig` field in a `package.json` file,
both of which ESLint will look for and read automatically.

Here’s an example `.eslintrc.json` file:

```json
{
  "extends": [
    "graph"
  ]
}
```

See [ESLint documentation](http://eslint.org/docs/user-guide/configuring) for more options.

## License

MIT
