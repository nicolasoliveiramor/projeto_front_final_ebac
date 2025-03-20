import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.corDeFundo};

  p {
    font-size: 40px;
    font-weight: bold;
    color: ${Colors.fontColor};
  }
`
