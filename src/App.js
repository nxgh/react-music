import React from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import routes from './router/index.js'

import GlobalStyle from './assets/global-style'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
  )
}

export default App
