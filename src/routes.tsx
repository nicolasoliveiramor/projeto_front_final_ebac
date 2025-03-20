import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Dishesrestaurant } from './pages/Dishes_Restaurant'

export const UrlRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<Dishesrestaurant />} />{' '}
  </Routes>
)
