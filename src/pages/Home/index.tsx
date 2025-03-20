import { RestaurantList } from '../../Components/Lists'
import { SiteBanner } from '../../Components/Banner'
import { Footer } from '../../Components/Footer'
import { Loader } from '../../Components/Loader'

import { useGetRestaurantQuery } from '../../services/api'

export const Home = () => {
  const { data: restaurant } = useGetRestaurantQuery()

  if (restaurant) {
    return (
      <>
        <SiteBanner />
        <RestaurantList restaurants={restaurant} />
        <Footer />
      </>
    )
  }

  return <Loader />
}
