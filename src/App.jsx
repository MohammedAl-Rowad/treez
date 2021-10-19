import React from 'react'
import edraakMaterialTheme from './edraakMaterialTheme'
import { ThemeProvider } from '@material-ui/core/styles'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import Example1 from './Example1/Example1'
import { StylesProvider, jssPreset } from '@material-ui/core/styles'  
import { create } from 'jss'
import rtl from 'jss-rtl'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

const App = () => {
  return (
    <ScopedCssBaseline>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={edraakMaterialTheme}>
          <Example1 />
        </ThemeProvider>
      </StylesProvider>
    </ScopedCssBaseline>
  )
}

export default App
