import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'

import * as S from './styles'

import logo from '../../assets/images/logo.png'
import banner from '../../assets/images/vector.png'

export const SiteBanner = () => (
  <S.Image style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <S.HomeLogo src={logo} />
      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </div>
  </S.Image>
)

export const RestaurantBanner = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.RestaurantImage style={{ backgroundImage: `url(${banner})` }}>
      <S.BannerContent>
        <S.Logo src={logo} />
        <div>
          <S.RestaurantLink to={'/'}>Restaurantes</S.RestaurantLink>
          <button onClick={openCart}>
            <span>{items.length}</span> Produto(s) no carrinho
          </button>
        </div>
      </S.BannerContent>
    </S.RestaurantImage>
  )
}
