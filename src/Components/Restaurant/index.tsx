// Importando o modelo Prato
import { Restaurante } from '../../models/Restaurante.model'
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

// Definindo as props que o componente Pratos irá receber.
// A prop "prato" é um objeto do tipo Prato.
export type Props = {
  restaurante: Restaurante
}

// Componente Pratos, que recebe um objeto "prato" como prop
export const Restaurantes = ({ restaurante }: Props) => (
  <Card>
    {/* Exibindo as informações do prato, como tipo e se é destaque */}
    <ImagemDoPrato style={{ backgroundImage: `url(${restaurante.image})` }}>
      <Infos>
        {restaurante.infos.map((info, index) => (
          <TagInfo key={index}>{info}</TagInfo>
        ))}
      </Infos>
    </ImagemDoPrato>
    <TitleProduct>
      {/* Exibindo o título do prato */}
      <h3>{restaurante.title}</h3>

      <Rating>
        <span>{restaurante.rating}</span>
        <img src={star} />
      </Rating>
    </TitleProduct>
    <div className="container">
      {/* Exibindo a descrição do prato */}
      <p>{restaurante.description}</p>
    </div>
    <ButtonLink to={'/restauranteitaliano'}>Saiba mais</ButtonLink>
  </Card>
)
