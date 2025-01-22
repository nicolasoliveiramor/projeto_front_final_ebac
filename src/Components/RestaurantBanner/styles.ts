import styled from 'styled-components'
import { Cores } from '../../styles'
import { Imagem } from '../Banner/styles'

export const RestauranteImage = styled(Imagem)`
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`

export const ContainerImage = styled.div`
  margin-top: 25px;
`

export const RestauranteTitle = styled.p`
  color: ${Cores.white};
  font-weight: 900;
  font-size: 32px;
  line-height: 37.5px;
  position: absolute;
  bottom: 32px;
  left: 170px;
`

export const RestauranteType = styled.p`
  color: ${Cores.white};
  font-weight: 100;
  font-size: 32px;
  margin-left: 170px;
  margin-bottom: 156.5px;
`
