import { useState } from 'react'

import { ButtonContainer } from '../Button/styles'
import { ModalOverlay } from '../Modal'

import * as S from './styles'

export const Dishes = ({ dish }: { dish: DishInterface }) => {
  const [isModalVisible, setModalVisible] = useState(false)

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <S.CardProducts>
      <S.DishImage src={dish.foto} alt={dish.nome} />
      <S.TitleProduct>
        <h3>{dish.nome}</h3>
      </S.TitleProduct>
      <p>{dish.descricao}</p>
      <ButtonContainer onClick={openModal}>Mais detalhes</ButtonContainer>
      {isModalVisible && (
        <ModalOverlay dish={dish} closeModal={closeModal}></ModalOverlay>
      )}
    </S.CardProducts>
  )
}
