import styled from 'styled-components'

import { Card } from '../Restaurante/styles'
import { Cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CardProducts = styled(Card)`
  width: 320px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${Cores.fontColor};
  color: ${Cores.fontColorSecondary};

  p {
    height: 225px;
    margin-bottom: 8px;
  }

  ${ButtonContainer} {
    position: absolute;
    margin-bottom: 8px;
    bottom: 0;
    left: 50%; // Centraliza horizontalmente
    transform: translateX(-50%); // Ajusta a posição horizontal
  }
`

export const ImagemDoPrato = styled.img`
  width: 100%;
  height: 230px;
  background-size: cover;
  background-repeat: no-repeat;
`

export const TitleProduct = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 16px;
  align-items: center;
  width: 100%;
`
