import { ListaDeRestaurantes } from '../../Components/Lists'

import { Banner } from '../../Components/Banner'
import { Footer } from '../../Components/Footer'
import { useGetRestaurantesQuery } from '../../services/api'

export const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (restaurantes) {
    return (
      <>
        <Banner />
        <ListaDeRestaurantes restaurantes={restaurantes} />
        <Footer />
      </>
    )
  }

  return <h3>Carregando...</h3>
}
