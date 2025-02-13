import { useState } from 'react'

import { PratoInterface } from '../../models'
import { ButtonContainer } from '../Button/styles'
import { ImagemDoPrato, TitleProduct, CardProducts } from './styles'
import { ModalOverlay } from '../Modal'

export const Pratos = ({ prato }: { prato: PratoInterface }) => {
  const [isModalVisible, setModalVisible] = useState(false)

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <CardProducts>
      <ImagemDoPrato src={prato.foto} alt={prato.nome} />
      <TitleProduct>
        <h3>{prato.nome}</h3>
      </TitleProduct>
      <p>{prato.descricao}</p>
      <ButtonContainer onClick={openModal}>Mais detalhes</ButtonContainer>
      {isModalVisible && (
        <ModalOverlay prato={prato} closeModal={closeModal}></ModalOverlay>
      )}
    </CardProducts>
  )
}
