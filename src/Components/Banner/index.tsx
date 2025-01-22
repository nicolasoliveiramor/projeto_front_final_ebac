import { Imagem, Logo, LogoInicial, Title, ImagemRestaurante } from './styles'

import banner from '../../assets/images/vector.png'
import logo from '../../assets/images/logo.png'
import { RestauranteLink } from './styles'

export const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <LogoInicial src={logo} />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </Imagem>
)

export const ProductBanner = () => (
  <ImagemRestaurante style={{ backgroundImage: `url(${banner})` }}>
    <div>
      <RestauranteLink to={'/'}>Restaurantes</RestauranteLink>
      <Logo src={logo} />
      <p>
        <span>0</span> Produtos(s) no carrinho
      </p>
    </div>
  </ImagemRestaurante>
)
