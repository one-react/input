import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { previewCode } from './util'

import Input from 'or-input'
import Example from './example'

import './styles.scss'

storiesOf('or-input', module)
  .addDecorator(
    withInfo({
      inline: true,
      propTables: [Input],
      propTablesExclude: [Example],
      styles: {
        jsxInfoContent: {
          borderTop: 'none',
          margin: 0
        }
      }
    })
  )
  .add('example', () => <Example />, {
    info: {
      source: false,
      text: previewCode(require('!!raw-loader!./example.tsx'))
    }
  })
