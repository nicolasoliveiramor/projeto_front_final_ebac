import styled from 'styled-components'
import { Colors } from '../../styles'

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const CloseModalDiv = styled.div`
  display: flex;
  align-self: flex-end;
  cursor: pointer;

  img {
    margin: 8px;
    width: 16px;
    height: 16px;
  }
`

export const SubModal = styled.div`
  width: 1024px;
  height: 344px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.fontColor};
  z-index: 1;
`

export const ModalDetails = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 32px;
  padding-right: 32px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`

export const ModalDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 24px;

  button {
    width: 218px;
    height: 24px;
    border: none;
    background-color: ${Colors.fontColorSecondary};
    color: ${Colors.fontColor};
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }

  span {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`
