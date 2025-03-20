import ReactInputMask from 'react-input-mask'
import { styled } from 'styled-components'

import { ButtonContainer } from '../../Components/Button/styles'

import { breakpoints, Colors } from '../../styles'

type FormItemProps = {
  maxwidth?: string
  marginbottom?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const DeliveryContainer = styled.div`
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
  max-width: 360px;
  width: 100%;
  background-color: ${Colors.fontColor};
  color: ${Colors.fontColorSecondary};
  z-index: 1;
  padding: 32px 8px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
  }
`

export const ButtonDelivery = styled(ButtonContainer)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  margin-bottom: 8px;
`

export const FormItem = styled.div<FormItemProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: ${(props) => props.maxwidth || 'auto'};
  margin-bottom: ${(props) => props.marginbottom || 'auto'};

  input {
    &.error {
      border: 1px solid red;
    }
  }

  small {
    margin-bottom: 8px;
  }
`

export const Form = styled.form`
  flex: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  p {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  span {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  div {
    max-width: 360px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    column-gap: 34px;

    ${FormItem} {
      max-width: 155px;
      width: 100%;

      &.card_number {
        max-width: 228px;
        width: 100%;
      }
      &.cvv {
        max-width: 87px;
        width: 100%;
      }
    }

    @media (max-width: ${breakpoints.small}) {
      column-gap: 8px;

      ${FormItem} {
        max-width: 130px;
        width: 100%;
      }
    }
    @media ((min-width: ${breakpoints.small}) and (max-width: ${breakpoints.mobile})) {
      column-gap: 8px;

      ${FormItem} {
        max-width: 155px;
        width: 100%;
      }
    }
  }

  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    height: 32px;
    color: ${Colors.fontColor};
    border: none;
    margin-bottom: 8px;
    padding: 8px;
  }
`

export const StyledReactInputMask = styled(ReactInputMask)`
  &::placeholder {
    font-size: 12px;
    color: ${Colors.fontColor};
    opacity: 0.5;
  }
`
