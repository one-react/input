import clx from 'classnames'
import React, { PureComponent } from 'react'

import { SvgBorderedClose } from 'or-icons'

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

export class Input extends PureComponent<Props, {}> {
  render() {
    const {
      className,
      placeholder = '',
      value,
      maxlength,
      canClear = true
    } = this.props
    const inputClass = clx(className, 'or-input')

    return (
      <div className={inputClass}>
        <input
          placeholder={placeholder}
          value={value}
          maxLength={maxlength}
          onChange={this.handleChange}
        />
        {canClear &&
          this.props.value !== '' && (
            <SvgBorderedClose
              className="or-clear-icon"
              size="18"
              onClick={this.handleClear}
            />
          )}
      </div>
    )
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange, numericInput = false } = this.props
    const { value } = e.target
    if (numericInput && typeof onChange === 'function') {
      const reg = /^[0-9]+$/
      if (reg.test(value) || value === '') {
        onChange(value)
      }
    } else {
      onChange(value)
    }
  }

  handleClear = () => {
    const { onChange } = this.props
    /* istanbul ignore next */
    if (typeof onChange === 'function') {
      onChange('')
    }
  }
}
