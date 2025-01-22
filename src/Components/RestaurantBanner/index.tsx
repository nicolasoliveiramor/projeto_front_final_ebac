import { Restaurante } from '../../models/Restaurante.model'

import {
  RestauranteTitle,
  RestauranteType,
  RestauranteImage,
  ContainerImage
} from './styles'
import restauranteFundo from '../../assets/images/imagem_de_fundo.png'

export const BannerRestaurante = ({
  restaurante
}: {
  restaurante: Restaurante
}) => (
  <RestauranteImage style={{ backgroundImage: `url(${restauranteFundo})` }}>
    <ContainerImage>
      <RestauranteType>{restaurante.infos[1]}</RestauranteType>
      <RestauranteTitle>{restaurante.title}</RestauranteTitle>
    </ContainerImage>
  </RestauranteImage>
)
