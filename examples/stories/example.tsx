import { Input } from 'or-input'
import React, { PureComponent } from 'react'

export default class Example extends PureComponent<{}, {}> {
  state = {
    name: '',
    age: ''
  }

  render() {
    return (
      <div>
        <Input
          placeholder="name"
          value={this.state.name}
          maxlength={12}
          onChange={this.handleChange('name')}
        />
        <Input
          numericInput={true}
          placeholder="age"
          value={this.state.age}
          maxlength={12}
          onChange={this.handleChange('age')}
        />
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
