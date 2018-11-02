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
