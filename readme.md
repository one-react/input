# One React Component: input

<p align="center"><img width="150" src="https://cdn.jsdelivr.net/gh/one-react/assets/logo%402x.png" alt="logo"></p>

[![TravisCI Build](https://img.shields.io/travis/one-react/input.svg)](https://travis-ci.org/one-react/input)
[![CircieCI Build](https://img.shields.io/circleci/project/github/one-react/input.svg)](https://circleci.com/gh/one-react/input)
[![Coverage](https://img.shields.io/codecov/c/github/one-react/input.svg)](https://codecov.io/gh/one-react/input) 
[![Version](https://img.shields.io/npm/v/or-input.svg)](https://www.npmjs.com/package/or-input)
[![Chat](https://img.shields.io/gitter/room/one-react-org/Lobby.svg)](https://gitter.im/one-react-org/Lobby)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/one-react/input.svg)](https://greenkeeper.io/) 

## Installation
```
// with npm
npm install or-input

// with yarn
yarn add or-input
```

## Usage
- Config webpack `sass-loader` if you are using webpack.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Basic Example

```jsx
import React, { PureComponent } from 'react'

import Input from 'or-input'

export default class Example extends PureComponent<{}, {}> {
  state = {
    mail: '',
    name: '',
    keywords: '',
    age: '',
    zipcode: ''
  }

  render() {
    return (
      <div className="example-wrapper">
        <div className="default-input">
          <h1>default input:</h1>
          <Input
            placeholder="mail"
            value={this.state.mail}
            onChange={this.handleChange('mail')}
          />
        </div>
        <div className="">
          <h1>input with maxlength：</h1>
          <div className="input-with-label">
            <div className="input-label">Name:</div>
            <Input
              placeholder="name maxlength 10"
              value={this.state.name}
              maxlength={10}
              onChange={this.handleChange('name')}
            />
          </div>
          <div className="input-with-label">
            <div className="input-label">Keywords:</div>
            <Input
              placeholder="keywords maxlength 12"
              value={this.state.keywords}
              maxlength={12}
              onChange={this.handleChange('keywords')}
            />
          </div>
        </div>
        <div className="">
          <h1>numeric input:</h1>
          <Input
            numericInput={true}
            placeholder="age"
            value={this.state.age}
            maxlength={3}
            onChange={this.handleChange('age')}
          />
        </div>
        <div className="">
          <h1>input value can't be cleared:</h1>
          <Input
            canClear={false}
            numericInput={true}
            placeholder="zipcode"
            value={this.state.zipcode}
            maxlength={8}
            onChange={this.handleChange('zipcode')}
          />
        </div>
      </div>
    )
  }

  handleChange = state => {
    return value => {
      this.setState({
        [`${state}`]: value
      })
    }
  }
}

```

## API

```ts
interface Props {
  /**
   * additional className
   */
  className?: string

  /**
   * whether the input box can only enter numbers
   * @default false
   */
  numericInput?: boolean

  /**
   * placeholder for input box
   */
  placeholder?: string

  /**
   * value of the input box
   */
  value: string

  /**
   * maxlength of the input box
   */
  maxlength?: number

  /**
   * whether the value of the input box can be cleared by clicking the clear icon
   * @default true
   */
  canClear?: boolean

  /**
   * callback triggered input's onchange event
   **/
  onChange: (value) => void
}
```

## Customize Theme
**Customize in webpack**

The following variables in or-input can be overridden:

```scss
$or-input-border-color: $or-gray2 !default;
$or-input-close-icon-fill: $or-gray2 !default;
```

Alternatively, you can override variables from [or-theme](https://github.com/one-react/theme/blob/master/src/variables.scss) to keep all or-components in a unified theme style.

First you should create a `theme.scss` file to declare the variables you want to override.

Then use the [data](https://github.com/webpack-contrib/sass-loader#environment-variables)  option provided by `sass-loader` to override the default values of the variables.

We take a typical `webpack.config.js` file as example to customize it's sass-loader options.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        data: fs.readFileSync(path.resolve(__dirname, 'theme.scss')) // pass theme.scss to sass-loader
      }
    }
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Demos and Docs
> powered by [storybook](https://storybook.js.org/)

[Click Here](https://one-react.github.io/input)

## License

MIT &copy; foryuki
