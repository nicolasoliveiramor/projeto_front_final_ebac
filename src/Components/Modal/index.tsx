import { useDispatch } from 'react-redux'

import { PratoInterface } from '../../models'
import { add, open } from '../../store/reducers/cart'
import { formataPreco } from '../../utils'

import {
  CloseModalDiv,
  Modal,
  ModalDescription,
  ModalDetails,
  ModalText,
  Overlay,
  SubModal
} from './styles'

import close from '../../assets/images/close.png'

export type ModalOverlayProps = {
  prato: PratoInterface
  closeModal: () => void
}

export const ModalOverlay = ({ prato, closeModal }: ModalOverlayProps) => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const addToCart = (prato: PratoInterface) => {
    dispatch(add(prato))
  }

  return (
    <>
      <Modal>
        <Overlay onClick={closeModal} />
        <SubModal>
          <CloseModalDiv>
            <img src={close} onClick={closeModal} />
          </CloseModalDiv>
          <ModalDetails>
            <img src={prato.foto} alt={prato.nome} />
            <ModalDescription>
              <h3>{prato.nome}</h3>
              <ModalText>
                <p>{prato.descricao}</p>
                <p>Serve: de {prato.porcao}</p>
              </ModalText>
              <button
                type="button"
                onClick={() => {
                  openCart()
                  addToCart(prato)
                }}
              >
                Adicionar ao carrinho - <span>{formataPreco(prato.preco)}</span>
              </button>
            </ModalDescription>
          </ModalDetails>
        </SubModal>
      </Modal>
    </>
  )
}
