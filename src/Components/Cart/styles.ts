import styled from 'styled-components'
import { Cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${Cores.fontColor};
  color: ${Cores.fontColorSecondary};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ul {
    background-color: ${Cores.fontColorSecondary};
    display: flex;

    img {
      height: 80px;
      width: 80px;
      object-fit: cover;
      margin-right: 8px;
    }
  }

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.div`
  width: 100%;
  justify-content: space-between;
  display: inline-flex;
  font-weight: 700;
  font-size: 14px;
  color: ${Cores.fontColorSecondary};
  margin-bottom: 24px;
`

export const CartItem = styled.ul`
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  li {
    display: flex;
    margin-left: 8px;

    div {
      display: flex;
      flex-direction: column;

      h3 {
        color: ${Cores.fontColor};
      }

      span {
        margin-top: 16px;
        color: ${Cores.fontColor};
      }
    }
  }

  button {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 8px;
    bottom: 8px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
      width: 16px;
      height: 16px;
    }
  }
`
