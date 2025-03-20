import { store } from './store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { UrlRoutes } from './routes'

import { Cart } from './Components/Cart'

import { GlobalCss } from './styles'
import { Checkout } from './pages/Checkout'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <UrlRoutes />
        <Cart />
        <Checkout />
      </BrowserRouter>
    </Provider>
  )
}

export default App
