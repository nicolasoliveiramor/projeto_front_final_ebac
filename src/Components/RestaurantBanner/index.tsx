import * as S from './styles'

export const Bannerrestaurant = ({
  restaurant
}: {
  restaurant: RestaurantInterface
}) => {
  return (
    <S.RestaurantApresentation>
      <S.RestaurantImage src={restaurant.capa} alt={restaurant.titulo} />
      <S.RestaurantType>{restaurant.tipo}</S.RestaurantType>
      <S.RestaurantTitle>{restaurant.titulo}</S.RestaurantTitle>
    </S.RestaurantApresentation>
  )
}
