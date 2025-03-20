import styled from 'styled-components'

import { breakpoints, Colors } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  max-width: 472px;
  min-height: 438px;
  width: 100%;
  height: 100%;
  background-color: ${Colors.white};
  margin: 0 auto;
  position: relative;
  border: 2px solid ${Colors.fontColor};

  h3 {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    width: 100%;
    max-height: 88px;
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

  @media (max-width: ${breakpoints.small}) {
    width: 100%;
    min-height: 508px;
  }

  @media ((min-width: ${breakpoints.small}) and (max-width: ${breakpoints.mobile})) {
    width: 90%;
    min-height: 508px;
  }

  @media ((min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})) {
    width: 100%;
    min-height: 508px;
  }

  @media ((min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})) {
    width: 90%;
    min-height: 448px;
  }
`

export const RestaurantImage = styled.div`
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
  font-size: 12px;
  font-weight: bold;

  span {
    @media (max-width: ${breakpoints.mobile}) {
      width: auto;
    }
  }
`

export const TagInfo = styled.div`
  background-color: ${Colors.fontColor};
  color: ${Colors.fontColorSecondary};
  padding: 8px;
  height: 26px;
  display: flex;
  align-items: center;
`

export const ProductTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 8px;
  align-items: center;
  position: relative;

  h3 {
    @media (max-width: ${breakpoints.small}) {
      font-size: 18px;
    }
  }
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
