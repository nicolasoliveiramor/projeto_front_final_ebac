import { Restaurante } from '../../models/Restaurante.model'

import sushiImage from '../../assets/images/japones.png'
import macarraoImage from '../../assets/images/macarrao.png'
import { ListaDeRestaurantes } from '../../Components/RestaurantList'
import { Banner } from '../../Components/Banner'
import { Footer } from '../../Components/Footer'

export const restaurantes: Restaurante[] = [
  {
    id: 1,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 5,
    infos: ['Destaque da semana', 'Italiana'],
    image: macarraoImage
  },
  {
    id: 2,
    title: 'Hioki Sushi ',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    rating: 5,
    infos: ['Japonesa', 'R$ 39,90'],
    image: sushiImage
  },
  {
    id: 3,
    title: 'Sushi House',
    description:
      'Desfrute do melhor sushi da cidade com ingredientes frescos e de alta qualidade. Entrega rápida e segura para você aproveitar no conforto de casa.',
    rating: 4.5,
    infos: ['Japonesa', 'R$ 49,90'],
    image: sushiImage
  },
  {
    id: 4,
    title: 'Sushi Express',
    description:
      'Sushis variados e deliciosos preparados na hora. Peça agora e receba em poucos minutos. Qualidade e sabor garantidos!',
    rating: 4.8,
    infos: ['Japonesa', 'R$ 29,90'],
    image: sushiImage
  },
  {
    id: 5,
    title: 'Sushi Gourmet',
    description:
      'Experimente a alta gastronomia japonesa com nossos pratos exclusivos. Ingredientes selecionados e preparo artesanal para uma experiência única.',
    rating: 5,
    infos: ['Japonesa', 'R$ 59,90'],
    image: sushiImage
  },
  {
    id: 6,
    title: 'Sushi Delivery',
    description:
      'O melhor do sushi entregue na sua casa com rapidez e segurança. Pratos frescos e saborosos para você aproveitar sem sair de casa.',
    rating: 4.7,
    infos: ['Japonesa', 'R$ 39,90'],
    image: sushiImage
  }
]

export const Home = () => (
  <>
    <Banner />
    <ListaDeRestaurantes restaurante={restaurantes} />
    <Footer />
  </>
)
