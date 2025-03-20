import { useParams } from 'react-router-dom'

import { DishesList } from '../../Components/Lists'
import { Bannerrestaurant } from '../../Components/RestaurantBanner'
import { RestaurantBanner } from '../../Components/Banner'
import { Footer } from '../../Components/Footer'
import { Loader } from '../../Components/Loader'

import { useGetSelectedRestaurantQuery } from '../../services/api'

type DishParams = {
  id: string
}

export const Dishesrestaurant = () => {
  const { id } = useParams() as DishParams
  const { data: restaurant } = useGetSelectedRestaurantQuery(id)

  if (restaurant) {
    return (
      <>
        <RestaurantBanner />
        <>
          <Bannerrestaurant restaurant={restaurant} />
          <DishesList dish={restaurant.cardapio} />
        </>
        <Footer />
      </>
    )
  }

  return <Loader />
}
