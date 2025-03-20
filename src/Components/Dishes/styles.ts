import styled from 'styled-components'

import { Card } from '../Restaurant/styles'
import { breakpoints, Colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CardProducts = styled(Card)`
  max-width: 320px;
  min-height: 508px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${Colors.fontColor};
  color: ${Colors.fontColorSecondary};

  p {
    height: 225px;
    margin-bottom: 8px;
  }

  ${ButtonContainer} {
    max-width: 304px;
    width: 100%;
    position: absolute;
    margin-bottom: 8px;
    bottom: 0;
    left: 50%; // Centraliza horizontalmente
    transform: translateX(-50%); // Ajusta a posição horizontal

    @media (max-width: ${breakpoints.small}) {
      width: 90%;
    }

    @media ((min-width: ${breakpoints.small}) and (max-width: ${breakpoints.mobile})) {
      width: 90%;
    }

    @media ((min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})) {
      width: 90%;
    }
  }

  @media (max-width: ${breakpoints.small}) {
    min-height: 508px;
  }

  @media ((min-width: ${breakpoints.small}) and (max-width: ${breakpoints.mobile})) {
    min-height: 508px;
  }

  @media ((min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})) {
    min-height: 508px;
  }

  @media ((min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})) {
    min-height: 538px;
    width: 90%;
  }
`

export const DishImage = styled.img`
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
