import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { formataPreco } from '../../utils'

import {
  CloseModalDiv,
  Modal,
  ModalDescription,
  ModalDetails,
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

  const handleOpenCart = () => {
    dispatch(open())
  }

  const handleAddToCart = (prato: PratoInterface) => {
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
              <span>{prato.descricao}</span>
              <span>Serve: de {prato.porcao}</span>
              <button
                type="button"
                onClick={() => {
                  handleOpenCart()
                  handleAddToCart(prato)
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
