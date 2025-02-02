import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { PratosRestaurante } from './pages/Pratos_Restaurant'

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/restaurante/:id" element={<PratosRestaurante />}></Route>
  </Routes>
)
