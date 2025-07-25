import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'

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

    @media (max-width: ${breakpoints.mobile}) {
      width: 18px;
      height: 18px;
    }
  }
`

export const SubModal = styled.div`
  max-width: 1024px;
  width: 100%;
  max-height: 344px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.fontColor};
  z-index: 1;

  @media (max-width: ${breakpoints.mobile}) {
    max-height: 50vh;
    height: 100%;
    justify-content: center;
  }

  @media ((min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})) {
    width: 100%;
    height: 424px;
  }

  @media ((min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.desktop})) {
    max-width: 100vw;
    width: 100%;
  }
`

export const ModalDetails = styled.div`
  max-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  padding-left: 32px;
  padding-right: 32px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;

    @media (max-width: ${breakpoints.small}) {
      width: 240px;
      height: 240px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
  }

  @media ((min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})) {
    padding-left: 0;
    padding-right: 0;
    width: 90%;
    height: 424px;

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }
  }

  @media ((min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.desktop})) {
    padding-left: 0;
    padding-right: 0;
    width: 90%;
  }
`

export const ModalDescription = styled.div`
  max-width: 656px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 24px;

  button {
    width: 218px;
    min-height: 24px;
    border: none;
    background-color: ${Colors.fontColorSecondary};
    color: ${Colors.fontColor};
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;

    @media (max-width: ${breakpoints.mobile}) {
      min-height: 32px;
    }
  }

  h3 {
    line-height: 21px;
    margin: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 0;
    justify-content: center;
    align-items: center;
  }
`

export const SpanDiv = styled.div`
  min-height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 16px;

  span {
    margin-top: 16px;
  }

  .description {
    line-height: 22px;
    margin-top: 16px;
  }
`
