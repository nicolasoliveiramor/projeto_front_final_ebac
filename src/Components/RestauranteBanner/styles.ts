import styled from 'styled-components'
import { Cores } from '../../styles'

export const RestaurantApresentation = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const RestauranteImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const RestauranteTitle = styled.p`
  color: ${Cores.white};
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  position: absolute;
  bottom: 32px;
  left: 170px;
  z-index: 1;
`

export const RestauranteType = styled.p`
  color: ${Cores.white};
  font-weight: lighter;
  font-size: 32px;
  line-height: 34px;
  position: absolute;
  top: 32px;
  left: 170px;
  z-index: 1;
`
