import { mount } from 'enzyme'
import React from 'react'

import Input from '../src'

describe('src/index', () => {
  describe('should render properly', () => {
    let wrapper
    it('should render basicly', () => {
      wrapper = mount(<RenderInput />)
      expect(wrapper.find('.or-input').length).toBe(1)
      expect(wrapper.find('.or-input input').prop('placeholder')).toBe('')
      expect(wrapper.find('.or-input input').prop('value')).toBe('')
      expect(wrapper.find('.or-input .or-clear-icon').length).toBe(0)
    })

    it('should render basicly #placeholder', () => {
      wrapper = mount(<RenderInput placeholder="name" />)
      expect(wrapper.find('.or-input').length).toBe(1)
      expect(wrapper.find('.or-input input[placeholder="name"]').length).toBe(1)
      expect(wrapper.find('.or-input input').prop('value')).toBe('')
    })
  })

  describe('simulate events', () => {
    let wrapper
    it('onchange event', () => {
      wrapper = mount(<RenderInput />)
      const input = wrapper.find('.or-input input')
      input.simulate('change', { target: { value: 'Changed' } })
      expect(wrapper.find('.or-input input').prop('value')).toBe('Changed')
      expect(wrapper.find('.or-input .or-clear-icon').hostNodes().length).toBe(
        1
      )
    })
  })

  describe('simulate clear input events', () => {
    let wrapper
    it('onchange event', () => {
      wrapper = mount(<RenderInput value="Dan" />)
      expect(wrapper.find('.or-input input').prop('value')).toBe('Dan')
      // https://github.com/one-react/input/issues/3
      expect(wrapper.find('.or-input .or-clear-icon').hostNodes().length).toBe(
        1
      )
    })
  })
})

interface Props {
  numericInput?: boolean
  maxlength?: number
  placeholder?: string
  value?: string
}

class RenderInput extends React.Component<Props, {}> {
  state = {
    name: this.props.value || ''
  }

  render() {
    return (
      <div>
        <Input
          value={this.state.name}
          onChange={this.handleChange}
          {...this.props}
        />
      </div>
    )
  }

  handleChange = value => {
    this.setState({
      name: value
    })
  }
}
