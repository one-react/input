import clx from 'classnames'
import React, { PureComponent } from 'react'

interface Props {
  /**
   * additional classname
   */
  classname?: string

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
      classname,
      placeholder,
      value,
      maxlength,
      canClear = true
    } = this.props
    const inputClass = clx(classname, 'or-input')

    return (
      <div className={inputClass}>
        <input
          placeholder={placeholder}
          value={value}
          maxLength={maxlength}
          onChange={this.handleChange}
        />
        {canClear && (
          <div className="or-clear-icon" onClick={this.handleClear} />
        )}
      </div>
    )
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { onChange, numericInput = false } = this.props
    const { value } = e.currentTarget
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
    if (typeof onChange === 'function') {
      onChange('')
    }
  }
}
