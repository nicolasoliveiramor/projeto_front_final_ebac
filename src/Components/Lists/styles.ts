import styled from 'styled-components'

export const GridRestaurantes = styled.div`
  width: 1024px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
  margin-top: 80px;
  margin-bottom: 120px;
`

export const GridPratos = styled(GridRestaurantes)`
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`
