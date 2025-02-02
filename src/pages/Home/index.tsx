import { useEffect, useState } from 'react'

import { RestauranteInterface } from '../../models'
import { ListaDeRestaurantes } from '../../Components/Lists'

import { Banner } from '../../Components/Banner'
import { Footer } from '../../Components/Footer'

export const Home = () => {
  const [restaurantes, setRestaurantes] = useState<RestauranteInterface[]>([])

  useEffect(() => {
    const fetchRestaurante = async (url: string) => {
      try {
        const resposta = await fetch(url)
        const data = await resposta.json()
        setRestaurantes(data)
      } catch (error) {
        console.error(`Erro ao buscar dados do restaurante: ${error}`)
      }
    }

    fetchRestaurante(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
  }, [])

  return (
    <>
      <Banner />
      <ListaDeRestaurantes restaurantes={restaurantes} />
      <Footer />
    </>
  )
}
