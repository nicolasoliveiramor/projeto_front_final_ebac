import { PratoInterface } from '../../models'

import close from '../../assets/images/close.png'

import {
  CloseModalDiv,
  Modal,
  ModalDescription,
  ModalDetails,
  ModalText,
  SubModal
} from './styles'
import { formataPreco } from '../../utils'

export type ModalOverlayProps = {
  prato: PratoInterface
  closeModal: () => void
}

export const ModalOverlay = ({ prato, closeModal }: ModalOverlayProps) => {
  return (
    <>
      <Modal onClick={closeModal}>
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
              <button>
                Adicionar ao carrinho - <span>{formataPreco(prato.preco)}</span>
              </button>
            </ModalDescription>
          </ModalDetails>
        </SubModal>
      </Modal>
    </>
  )
}
