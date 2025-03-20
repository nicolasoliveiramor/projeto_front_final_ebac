import { ButtonLink } from '../Button/styles'
import * as S from './styles'

import star from '../../assets/images/estrela.png'

export const RestaurantCard = ({
  restaurant
}: {
  restaurant: RestaurantInterface
}) => {
  const renderDestacado = () => {
    if (restaurant.destacado) {
      return <S.TagInfo>Destaque da semana</S.TagInfo>
    }

    return null
  }

  return (
    <div>
      <S.Card key={restaurant.id}>
        <S.RestaurantImage
          style={{ backgroundImage: `url(${restaurant.capa})` }}
        >
          <S.Infos>
            <span>{renderDestacado()}</span>
            <S.TagInfo>{restaurant.tipo}</S.TagInfo>
          </S.Infos>
        </S.RestaurantImage>
        <S.ProductTitle>
          <h3>{restaurant.titulo}</h3>
          <S.Rating>
            <span>{restaurant.avaliacao}</span>
            <img src={star} />
          </S.Rating>
        </S.ProductTitle>
        <p>{restaurant.descricao}</p>
        <ButtonLink to={`/restaurant/${restaurant.id}`}>Saiba mais</ButtonLink>
      </S.Card>
    </div>
  )
}
