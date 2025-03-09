import { useParams } from 'react-router-dom'

import { ListaDePratos } from '../../Components/Lists'
import { BannerRestaurante } from '../../Components/RestauranteBanner'
import { ProductBanner } from '../../Components/Banner'
import { Footer } from '../../Components/Footer'
import { useGetRestauranteEspecificoQuery } from '../../services/api'

type PratoParams = {
  id: string
}

export const PratosRestaurante = () => {
  const { id } = useParams() as PratoParams
  const { data: restaurante } = useGetRestauranteEspecificoQuery(id)

  if (restaurante) {
    return (
      <>
        <ProductBanner />
        <>
          <BannerRestaurante restaurante={restaurante} />
          <ListaDePratos prato={restaurante.cardapio} />
        </>
        <Footer />
      </>
    )
  }

  return <h3>Carregando...</h3>
}
