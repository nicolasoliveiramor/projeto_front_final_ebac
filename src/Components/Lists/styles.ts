import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const RestaurantGrid = styled.div`
  max-width: 1024px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    grid-template-columns: 1fr;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
`

export const DishesGrid = styled(RestaurantGrid)`
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media ((min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
  }

  @media ((min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }
`
