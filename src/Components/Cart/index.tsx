import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove, openCheckout } from '../../store/reducers/cart'
import { formataprice, getTotalPrice } from '../../utils'

import * as S from './styles'

import exit from '../../assets/images/lixeira-de-reciclagem.png'

export const Cart = () => {
  const dispatch = useDispatch()

  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

  const handleOpenCheckout = () => {
    dispatch(openCheckout())
  }

  const handleCloseCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={handleCloseCart} />
      <S.Sidebar>
        {items.length === 0 ? (
          <p>Poxa... Não há nada aqui, adicione algum prato.</p>
        ) : (
          <>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <li>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataprice(item.preco)}</span>
                  </div>
                </li>
                <button type="button" onClick={() => removeItem(item.id)}>
                  <img src={exit} alt={`Remover ${item.nome}`} />
                </button>
              </S.CartItem>
            ))}
            <S.Prices>
              <p>Valor total </p>
              <p>{formataprice(getTotalPrice(items))}</p>
            </S.Prices>
            <S.ButtonCart
              type="button"
              title="string"
              onClick={() => {
                handleOpenCheckout()
                handleCloseCart()
              }}
            >
              Continuar com a entrega
            </S.ButtonCart>
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}
