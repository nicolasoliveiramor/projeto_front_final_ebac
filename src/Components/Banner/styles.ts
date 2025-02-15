import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { breakpoints, Cores } from '../../styles'

export const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 124px;
  height: 58px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 62px;
    height: 29px;
  }
`

export const Imagem = styled.div`
  max-width: auto;
  width: 100%;
  height: 384px;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${Logo} {
      margin-bottom: 262px;
    }
  }
`

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const LogoInicial = styled(Logo)`
  margin-top: 24px;
`

export const Title = styled.h1`
  max-width: 539px;
  width: 100%;
  position: absolute;
  line-height: 42px;
  top: 236px;
  text-align: center;
  font-weight: bold;
  font-size: 36px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
    top: 118px;
  }
`

export const ImagemRestaurante = styled(Imagem)`
  display: flex;
  height: 186px;
  align-items: center;
  padding: 0 32px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: ${breakpoints.tablet}) {
      justify-content: center;
      gap: 8px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      justify-content: center;
      gap: 8px;
    }
  }

  span {
    margin-right: 4px;
    font-weight: bold;
  }

  button {
    border: none;
    background-color: transparent;
    color: ${Cores.fontColor};
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }
`

export const RestauranteLink = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  color: ${Cores.fontColor};
`
