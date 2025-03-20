import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { formataprice } from '../../utils'

import * as S from './styles'

import close from '../../assets/images/close.png'

export type ModalOverlayProps = {
  dish: DishInterface
  closeModal: () => void
}

export const ModalOverlay = ({ dish, closeModal }: ModalOverlayProps) => {
  const dispatch = useDispatch()

  const handleOpenCart = () => {
    dispatch(open())
  }

  const handleAddToCart = (dish: DishInterface) => {
    dispatch(add(dish))
  }

  return (
    <>
      <S.Modal>
        <S.Overlay onClick={closeModal} />
        <S.SubModal>
          <S.CloseModalDiv>
            <img src={close} onClick={closeModal} />
          </S.CloseModalDiv>
          <S.ModalDetails>
            <img src={dish.foto} alt={dish.nome} />
            <S.ModalDescription>
              <h3>{dish.nome}</h3>
              <S.SpanDiv>
                <span className="description">{dish.descricao}</span>
                <span>Serve: de {dish.porcao}</span>
              </S.SpanDiv>
              <button
                type="button"
                onClick={() => {
                  handleOpenCart()
                  handleAddToCart(dish)
                }}
              >
                Adicionar ao carrinho - <span>{formataprice(dish.preco)}</span>
              </button>
            </S.ModalDescription>
          </S.ModalDetails>
        </S.SubModal>
      </S.Modal>
    </>
  )
}
