import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'

import {
  Imagem,
  Logo,
  LogoInicial,
  Title,
  ImagemRestaurante,
  BannerContent
} from './styles'
import { RestauranteLink } from './styles'

import logo from '../../assets/images/logo.png'
import banner from '../../assets/images/vector.png'

export const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <LogoInicial src={logo} />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </Imagem>
)

export const ProductBanner = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <ImagemRestaurante style={{ backgroundImage: `url(${banner})` }}>
      <BannerContent>
        <RestauranteLink to={'/'}>Restaurantes</RestauranteLink>
        <Logo src={logo} />
        <p>
          <span>{items.length}</span> Produtos(s) no carrinho
        </p>
      </BannerContent>
    </ImagemRestaurante>
  )
}
