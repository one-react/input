import { mount } from 'enzyme'
import React from 'react'

import { sleep } from './util'

import Input from '../src'

describe('src/index', () => {
  describe('should render properly', () => {
    let wrapper
    it('should render basicly', () => {
      wrapper = mount(<RenderInput />)
      expect(wrapper.find('.or-input').length).toBe(1)
      expect(wrapper.find('.or-input input').prop('placeholder')).toBe('')
      expect(wrapper.find('.or-input input').prop('value')).toBe('')
      expect(wrapper.find('.or-input .or-clear-icon').length).toBe(1)
    })

    it('should render basicly #placeholder', () => {
      wrapper = mount(<RenderInput placeholder="name" />)
      expect(wrapper.find('.or-input').length).toBe(1)
      expect(wrapper.find('.or-input input[placeholder="name"]').length).toBe(1)
      expect(wrapper.find('.or-input input').prop('value')).toBe('')
    })
  })

  describe('simulate events', async () => {
    let wrapper
    it('onchange event', async () => {
      wrapper = mount(<RenderInput />)
      const input = wrapper.find('.or-input input')
      input.instance().value = 'yuki'
      input.simulate('change')
      // input.simulate('focus');
      // input.simulate('change', { target: { value: 'Changed' } });
      // input.simulate('keyDown', {
      //   which: 72,
      //   target: {
      //     blur() {
      //       // Needed since <EditableText /> calls target.blur()
      //       input.simulate('blur');
      //     },
      //   },
      // })
      // await sleep(500)
      // expect(input.props().value).toBe('Hello');
      // input.simulate('change', { target: { value: 'yuki' } })
      // expect(wrapper.find('input').prop('value')).toBe('yuki')

      expect(input.value).toBe('yuki')
    })
  })
})

interface Props {
  numericInput?: boolean
  maxlength?: number
  placeholder?: string
}

class RenderInput extends React.Component<Props, {}> {
  state = {
    name: ''
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
