import { RestauranteInterface } from '../../models'

import { ButtonLink } from '../Button/styles'
import {
  ImagemDoPrato,
  Infos,
  Card,
  TagInfo,
  TitleProduct,
  Rating
} from './styles'

import star from '../../assets/images/estrela.png'

export const Restaurantes = ({
  restaurante
}: {
  restaurante: RestauranteInterface
}) => {
  const renderDestacado = () => {
    if (restaurante.destacado) {
      return <TagInfo>Destaque da semana</TagInfo>
    }

    return null
  }

  return (
    <div>
      <Card key={restaurante.id}>
        <ImagemDoPrato style={{ backgroundImage: `url(${restaurante.capa})` }}>
          <Infos>
            {renderDestacado()}
            <TagInfo>{restaurante.tipo}</TagInfo>
          </Infos>
        </ImagemDoPrato>
        <TitleProduct>
          <h3>{restaurante.titulo}</h3>
          <Rating>
            <span>{restaurante.avaliacao}</span>
            <img src={star} />
          </Rating>
        </TitleProduct>
        <p>{restaurante.descricao}</p>
        <ButtonLink to={`/restaurante/${restaurante.id}`}>
          Saiba mais
        </ButtonLink>
      </Card>
    </div>
  )
}
