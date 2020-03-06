import React from 'react'
import ReactDOM from 'react-dom'
import {Helmet} from 'react-helmet'
import {createMuiTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles'
import {orange} from '@material-ui/core/colors'

import App from './App'
import * as serviceWorker from './serviceWorker'

let theme = createMuiTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
  },
})

theme = responsiveFontSizes(theme)

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <Helmet>
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />

      <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />

      <meta
        name='viewport'
        content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
      />
    </Helmet>

    <App />
  </ThemeProvider>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
