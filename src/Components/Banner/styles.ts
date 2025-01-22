import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .container {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoInicial = styled(Logo)`
  margin-top: 24px;
`

export const Title = styled.h1`
  position: absolute;
  width: 539px;
  line-height: 42px;
  top: 236px;
  text-align: center;
  font-weight: bold;
  font-size: 36px;
`

export const ImagemRestaurante = styled(Imagem)`
  display: flex;
  height: 186px;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  span {
    margin-right: 4px;
    font-weight: bold;
  }

  p {
    font-weight: bold;
  }
`

export const RestauranteLink = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  color: ${Cores.fontColor};
`
