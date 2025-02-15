import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../../utils'

import { Button } from '../Button'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'

import fechar from '../../assets/images/lixeira-de-reciclagem.png'

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.map((item) => (
          <CartItem key={item.id}>
            <li>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
            </li>
            <button type="button" onClick={() => removeItem(item.id)}>
              <img src={fechar} alt={`Remover ${item.nome}`} />
            </button>
          </CartItem>
        ))}
        <Prices>
          <p>Valor total </p>
          <p>{formataPreco(getTotalPrice())}</p>
        </Prices>
        <Button type="button" title="string">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}
