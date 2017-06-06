# eslint-config-graph-base

This package provides **base** ESLint config according to the Graph styleguide, which is based on [AirBnB](https://github.com/airbnb/javascript).

## Installation

To install package run `npm install eslint-config-graph-base --save-dev`

## Configuration

Use a JSON file to specify configuration information for an entire directory and all of its subdirectories.
This can be in the form of an `.eslintrc.json` file or an `eslintConfig` field in a `package.json` file,
both of which ESLint will look for and read automatically.

Here’s an example `.eslintrc.json` file:

```json
{
  "extends": [
    "graph-base"
  ]
}
```

See [ESLint documentation](http://eslint.org/docs/user-guide/configuring) for more options.

## License

MIT
