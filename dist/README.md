# jms-design-system

This project contains reusable JavaScript React components that you can import into your project. It was inspired in GumDrops Design System

[![npm version](https://badge.fury.io/js/jms-design-system.svg)](https://badge.fury.io/js/jms-design-system) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Build Status](https://travis-ci.org/gumgum/jms-design-system.svg?branch=master)](https://travis-ci.org/gumgum/jms-design-system)

## Documentation

[See the documentation](https://jms-design-system.gumgum.com) for this library and its components.

## Installation

To add a specific version, you can use
`yarn add jms-design-system@1.0.0` (replace 1.0.0 with whatever version you want, or omit it to get the latest version)

The current and previous versions can be found in [CHANGELOG.md](CHANGELOG.md)

## Usage

The library exports its components as [ES Modules](https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc), so you can import only what you need, for example:

```
import Button from 'jms-design-system/Button';
import Badge from 'jms-design-system/Badge';
import Toggle from 'jms-design-system/Toggle';
```

Follow the [docs](https://jms-design-system.gumgum.com) to use your component with the correct props.

### Testing troubleshooting

Unfortunately, ESM is not yet widely available for some current tools, and running tests using components from this library could throw errors because of the ES module syntax. To prevent this, try the following:

* **For Jest**:
  Jest uses its own implementation of require and will attempt to parse files with it and babel-jest, by default, it ignores node_modules which will result in syntax errors from the import statements. Add the next line to your jest config so that it ignores everything in node_modules, except for this library:

    ```
    "transformIgnorePatterns": ["/node_modules/(?!jms-design-system)"]
    ```

* **For Mocha + Webpack**:
  It is very likely that your mocha and webpack configurations also ignore the node_modules directory, to prevent any syntax errors, load babel through a configuration file instead of calling `--compilers js:babel-register` or `--require babel-register` directly.

The file contents can be as simple as:

```
// testSetup.js
require('babel-register')({
    ignore: /node_modules\/(?!jms-design-system)/
});

// Import it into mocha or mocha-webpack:
--require ./testSetup.js
```

### Prerequisites for running project locally

* Git and [Git Flow](https://github.com/petervanderdoes/gitflow-avh)
* [NodeJS/NPM](http://nodejs.org/download/) & [Yarn](https://yarnpkg.com/): _Minimum Required Versions_ - We have tested with the following versions - `node: ^8.9.0, npm: ^5.5.1, yarn ^1.2.1`
* Install the ESLint validators and [Prettier](https://prettier.io/docs/en/editors.html) on your editor of choice. We have the configuration files on the root of the project, `.eslinrc` and `.prettierrc`. There is a precommit hook to run the Prettier scripts on the files.

### Running storybook locally

```
yarn # install dependencies
yarn run storybook
```

Then open `http://localhost:6006` on your browser. For more information visit [React Storybook](https://github.com/storybooks/storybook) repo.

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for information about contributing to this project.

## Contributors

A special thank you to the following contributors!

[Paulo Soares](https://github.com/paulosoares86)
[Rodrigo Gama](https://github.com/rodrigogama)
[Heitor Prezia](https://github.com/hprezia)

## License

[MIT](LICENSE.md)

Important Note: This project does not redistribute third party libraries but identifies their availability. The libraries called by this project are subject to their creator licenses. Remember to consult and comply with all licenses in your uses.
