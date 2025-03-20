import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'

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

export const RestaurantImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const RestaurantTitle = styled.p`
  color: ${Colors.white};
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  position: absolute;
  bottom: 32px;
  left: 170px;
  z-index: 1;

  @media (max-width: ${breakpoints.small}) {
    left: 10%;
    font-size: 24px;
  }

  @media ((min-width: ${breakpoints.small}) and (max-width: ${breakpoints.mobile})) {
    left: 10%;
    font-size: 24px;
  }

  @media ((min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.desktop})) {
    left: 10%;
    font-size: 28px;
  }
`

export const RestaurantType = styled.p`
  color: ${Colors.white};
  font-weight: lighter;
  font-size: 32px;
  line-height: 38px;
  position: absolute;
  top: 32px;
  left: 170px;
  z-index: 1;

  @media (max-width: ${breakpoints.small}) {
    left: 10%;
    font-size: 24px;
  }

  @media ((min-width: ${breakpoints.small}) and (max-width: ${breakpoints.mobile})) {
    left: 10%;
    font-size: 24px;
  }

  @media ((min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.desktop})) {
    left: 10%;
    font-size: 28px;
  }
`
