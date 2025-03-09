import styled from 'styled-components'
import { Colors } from '../../styles'
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
  background-color: ${Colors.fontColor};
  color: ${Colors.fontColorSecondary};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  font-weight: bold;

  ul {
    background-color: ${Colors.fontColorSecondary};
    display: flex;

    img {
      height: 80px;
      width: 80px;
      object-fit: cover;
      margin-right: 8px;
    }
  }
`

export const ButtonCart = styled(ButtonContainer)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  margin-bottom: 8px;
`

export const Prices = styled.div`
  width: 100%;
  justify-content: space-between;
  display: inline-flex;
  font-weight: 700;
  font-size: 14px;
  color: ${Colors.fontColorSecondary};
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
        color: ${Colors.fontColor};
      }

      span {
        margin-top: 16px;
        color: ${Colors.fontColor};
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
