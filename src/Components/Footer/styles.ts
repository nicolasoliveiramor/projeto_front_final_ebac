import styled from 'styled-components'

import { breakpoints, Cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${Cores.fontColorSecondary};
  height: 298px;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-top: 32.5px;
    margin-bottom: 80px;
  }

  p {
    max-width: 480px;
    width: 100%;
    height: 24px;
    font-size: 10px;
    line-height: 11.72px;
    text-align: center;

    @media (max-width: ${breakpoints.tablet}) {
      width: 80%;
    }
  }
`

export const Link = styled.a`
  color: ${Cores.fontColor};
  text-decoration: none;

  img {
    width: 32px; /* Ajuste o tamanho desejado */
    height: 32px; /* Ajuste o tamanho desejado */
  }
`
