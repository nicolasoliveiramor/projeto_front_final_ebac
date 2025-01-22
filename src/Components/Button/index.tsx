import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: 'string'
  to?: 'string'
  onClick?: () => void
  children: string
}

export const Button = ({ title, children, type, onClick, to }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="submit" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink type="submit" title={title} to={to as string}>
      {children}
    </ButtonLink>
  )
}
