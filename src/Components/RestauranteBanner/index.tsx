import {
  RestauranteTitle,
  RestauranteType,
  RestauranteImage,
  RestaurantApresentation
} from './styles'

export const BannerRestaurante = ({
  restaurante
}: {
  restaurante: RestauranteInterface
}) => {
  return (
    <RestaurantApresentation>
      <RestauranteImage src={restaurante.capa} alt={restaurante.titulo} />
      <RestauranteType>{restaurante.tipo}</RestauranteType>
      <RestauranteTitle>{restaurante.titulo}</RestauranteTitle>
    </RestaurantApresentation>
  )
}
