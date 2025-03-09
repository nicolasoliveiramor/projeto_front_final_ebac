import styled from 'styled-components'

import { Colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  width: 304px;
  display: flex;
  justify-content: center;
  border: none;
  color: ${Colors.fontColor};
  background-color: ${Colors.fontColorSecondary};
  font-size: 16px;
  font-weight: bold;
  padding: 6px 4px;
  text-decoration: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  display: block;
  border: none;
  color: ${Colors.fontColorSecondary};
  background-color: ${Colors.fontColor};
  font-size: 16px;
  font-weight: bold;
  padding: 6px 4px;
  text-decoration: none;
`
