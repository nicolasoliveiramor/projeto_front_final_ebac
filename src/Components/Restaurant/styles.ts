import styled from 'styled-components'

import { Cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${Cores.white};
  max-width: 472px;
  min-height: 398px;
  position: relative;
  border: 2px solid ${Cores.fontColor};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    position: relative;
    padding-bottom: 16px;
  }

  h3 {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    width: 100%;
  }

  ${ButtonLink} {
    position: absolute;
    bottom: 8px;
    left: 8px;
  }
`

export const CardProducts = styled(Card)`
  width: 320px;
  height: 338px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Cores.fontColor};
  color: ${Cores.fontColorSecondary};
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
  background-color: ${Cores.fontColor};
  color: ${Cores.fontColorSecondary};
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
