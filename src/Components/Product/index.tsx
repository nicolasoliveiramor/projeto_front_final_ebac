// Importando o modelo Prato
import { Prato } from '../../models/Pratos.model'
import { ButtonContainer } from '../Button/styles'
import { CardProducts } from '../Restaurant/styles'
import { ImagemDoPrato, TitleProduct } from './styles'

// Definindo as props que o componente Pratos irá receber.
// A prop "prato" é um objeto do tipo Prato.
export type Props = {
  pratos: Prato
}

// Componente Pratos, que recebe um objeto "prato" como prop
export const Pratos = ({ pratos }: Props) => (
  <CardProducts>
    {/* Exibindo as informações do prato, como tipo e se é destaque */}
    <ImagemDoPrato
      style={{ backgroundImage: `url(${pratos.image})` }}
    ></ImagemDoPrato>
    <TitleProduct>
      {/* Exibindo o título do prato */}
      <h3>{pratos.title}</h3>
    </TitleProduct>
    <div className="container">
      {/* Exibindo a descrição do prato */}
      <p>{pratos.description}</p>
    </div>
    <ButtonContainer>Adicionar ao carrinho</ButtonContainer>
  </CardProducts>
)
