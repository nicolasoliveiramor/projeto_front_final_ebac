import { Route, Routes } from 'react-router-dom'

import { Home, restaurantes } from './pages/Home'
import { RestauranteItaliano } from './pages/Profile'

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route
      path="/restauranteitaliano"
      element={<RestauranteItaliano restaurante={restaurantes} />}
    ></Route>
  </Routes>
)
