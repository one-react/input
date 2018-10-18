import clx from 'classnames'
import React, { PureComponent } from 'react'

interface Props {
  /**
   * additional classname for input
   */
  classname?: string

  type?: 'text' | 'number'

  numericInput?: boolean

  placeholder?: string

  value: string

  maxlength?: number

  withClearIcon?: boolean

  /**
   * callback triggered input's onchange event
   **/
  onChange?: (value) => void
}

export class Input extends PureComponent<Props, {}> {
  render() {
    const {
      classname,
      placeholder,
      value,
      maxlength,
      withClearIcon = true
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
        {withClearIcon && (
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
