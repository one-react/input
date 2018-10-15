import { mount } from 'enzyme'
import React from 'react'

import Sample from '../src'

function renderBtnFactory(type?: 'warning' | 'primary') {
  const wrapper = mount(<Sample type={type}>test</Sample>)
  expect(wrapper.find('.or-btn').length).toBe(1)
  if (type) {
    expect(wrapper.find(`.or-btn-${type}`).length).toBe(1)
  }
}

describe('src/index', () => {
  it('should render properly: no type', () => {
    renderBtnFactory()
  })

  it('should render properly: type#primary', () => {
    renderBtnFactory('primary')
  })

  it('should render properly: type#warning', () => {
    renderBtnFactory('warning')
  })

  it('simulates click events', () => {
    const mockCallBack = jest.fn()
    const wrapper = mount(<Sample onClick={mockCallBack}>test</Sample>)
    wrapper.find('.or-btn').simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })
})
