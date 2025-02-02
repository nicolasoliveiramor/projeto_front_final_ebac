import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { RestauranteInterface } from '../../models'
import { ListaDePratos } from '../../Components/Lists'
import { BannerRestaurante } from '../../Components/RestauranteBanner'
import { ProductBanner } from '../../Components/Banner'
import { Footer } from '../../Components/Footer'

export const PratosRestaurante = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<RestauranteInterface | null>(
    null
  )

  useEffect(() => {
    const fetchRestaurante = async () => {
      try {
        const resposta = await fetch(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
        )
        const data = await resposta.json()
        setRestaurante(data)
      } catch (error) {
        console.error(`Erro ao buscar dados do restaurante: ${error}`)
      }
    }

    fetchRestaurante()
  }, [id])

  return (
    <>
      <ProductBanner />
      {restaurante ? (
        <>
          <BannerRestaurante restaurante={restaurante} />
          {restaurante.cardapio && restaurante.cardapio.length > 0 ? (
            <ListaDePratos prato={restaurante.cardapio} />
          ) : (
            <p>Nenhum prato disponível.</p>
          )}
        </>
      ) : (
        <p>Carregando restaurante...</p>
      )}
      <Footer />
    </>
  )
}
