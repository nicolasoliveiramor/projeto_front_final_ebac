import { styled } from 'styled-components'
import { Colors } from '../../styles'
import { ButtonContainer } from '../../Components/Button/styles'

type FormItemProps = {
  maxwidth?: string
  marginbotton?: string
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
  width: 100%;
  max-width: 360px;
  background-color: ${Colors.fontColor};
  color: ${Colors.fontColorSecondary};
  z-index: 1;
  padding: 40px 16px 0 16px;
  display: flex;
  flex-direction: column;
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
  margin-bottom: ${(props) => props.marginbotton || 'auto'};

  &.error {
    border: 1px solid red;
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
    display: flex;
    justify-content: space-between;

    ${FormItem} {
      width: 155px;
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
