import styled from 'styled-components'

import { Cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  width: 304px;
  display: flex;
  justify-content: center;
  border: none;
  color: ${Cores.fontColor};
  background-color: ${Cores.fontColorSecondary};
  font-size: 16px;
  font-weight: bold;
  padding: 6px 4px;
  text-decoration: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  display: block;
  border: none;
  color: ${Cores.fontColorSecondary};
  background-color: ${Cores.fontColor};
  font-size: 16px;
  font-weight: bold;
  padding: 6px 4px;
  text-decoration: none;
`
