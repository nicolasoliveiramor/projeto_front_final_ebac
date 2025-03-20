import { Dishes } from '../Dishes'
import { RestaurantCard } from '../Restaurant'

import * as S from './styles'

export const RestaurantList = ({
  restaurants
}: {
  restaurants: RestaurantInterface[]
}) => {
  return (
    <div className="container">
      <S.RestaurantGrid>
        {restaurants.map((item) => (
          <RestaurantCard key={item.id} restaurant={item} />
        ))}
      </S.RestaurantGrid>
    </div>
  )
}

export const DishesList = ({ dish }: { dish: DishInterface[] }) => {
  return (
    <div className="container">
      <S.DishesGrid>
        {dish.map((item) => (
          <Dishes key={item.id} dish={item} />
        ))}
      </S.DishesGrid>
    </div>
  )
}
