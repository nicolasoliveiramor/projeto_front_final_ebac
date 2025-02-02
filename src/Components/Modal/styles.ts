import styled from 'styled-components'
import { Cores } from '../../styles'

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

export const CloseModalDiv = styled.div`
  display: flex;
  align-self: flex-end;

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
  background-color: ${Cores.fontColor};
`

export const ModalDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
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

  p {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  button {
    width: 218px;
    height: 24px;
    border: none;
    background-color: ${Cores.fontColorSecondary};
    color: ${Cores.fontColor};
    font-weight: bold;
    font-size: 14px;
  }
`

export const ModalText = styled.div`
  width: 656px;
  height: 176px;
`
