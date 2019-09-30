import React from 'react'

import { createGlobalStyle } from 'styled-components'
import globalStyles from '../styles/styles'

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`

const Layout = ({ children }) => (
  <div className='app'>
    <GlobalStyle />
    {children}
  </div>
)

export default Layout
