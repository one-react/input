import clx from 'classnames'
import React, { MouseEvent, PureComponent } from 'react'

interface Props {
  /**
   * additional classname for btn
   */
  classname?: string
  /**
   * type for button
   **/
  type?: 'primary' | 'warning'
  /**
   * callback triggered button click
   **/
  onClick?: () => void
}

export class Sample extends PureComponent<Props, {}> {
  render() {
    const { classname, type, children } = this.props
    const btnClass = clx(
      {
        'or-btn': true,
        [`or-btn-${type}`]: type
      },
      classname
    )

    return (
      <div className={btnClass} onClick={this.handleClick}>
        {children}
      </div>
    )
  }

  handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const { onClick } = this.props
    if (onClick) {
      onClick()
    }
  }
}
