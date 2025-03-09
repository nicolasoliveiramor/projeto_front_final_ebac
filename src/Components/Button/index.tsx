import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

export const Button = ({ title, children, type, onClick, to }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type={type} title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink type={type} title={title} to={to as string}>
      {children}
    </ButtonLink>
  )
}
