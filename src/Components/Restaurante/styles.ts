import styled from 'styled-components'

import { breakpoints, Colors } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${Colors.white};
  max-width: 472px;
  min-height: 438px;
  position: relative;
  border: 2px solid ${Colors.fontColor};

  h3 {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    position: relative;
    padding-bottom: 16px;
  }

  ${ButtonLink} {
    position: absolute;
    bottom: 8px;
    left: 8px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    min-height: 456px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    min-height: 510px;
  }
`

export const ImagemDoPrato = styled.div`
  width: 100%;
  height: 217px;
  background-size: cover;
  background-repeat: no-repeat;
`

export const Infos = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const TagInfo = styled.div`
  background-color: ${Colors.fontColor};
  color: ${Colors.fontColorSecondary};
  padding: 8px;
  height: 26px;
  display: flex;
  align-items: center;
`

export const TitleProduct = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 8px;
  align-items: center;
  position: relative;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: center;
  position: absolute;
  top: 8px;
  right: 16px;

  span {
    font-size: 18px;
    margin-right: 8px;
  }

  img {
    width: 16px;
    height: 16px;
  }
`
