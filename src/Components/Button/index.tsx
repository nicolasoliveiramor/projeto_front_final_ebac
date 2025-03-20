import * as S from './styles'

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
      <S.ButtonContainer type={type} title={title} onClick={onClick}>
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink type={type} title={title} to={to as string}>
      {children}
    </S.ButtonLink>
  )
}
