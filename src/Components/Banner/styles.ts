import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'

export const Logo = styled.img`
  position: absolute;
  width: 124px;
  height: 58px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 62px;
    height: 29px;
  }
`

export const Image = styled.div`
  width: auto;
  height: 384px;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${Logo} {
      margin-bottom: 222px;
    }
  }

  @media (max-width: ${breakpoints.small}) {
    max-height: 240px;

    .container {
      ${Logo} {
        margin-bottom: 162px;
      }
    }
  }

  @media ((min-width: ${breakpoints.small}) and (max-width: ${breakpoints.mobile})) {
    max-height: 240px;

    .container {
      ${Logo} {
        margin-bottom: 162px;
      }
    }
  }
`

export const BannerContent = styled.div`
  max-width: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: ${breakpoints.small}) {
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  @media ((min-width: ${breakpoints.small}) and (max-width: ${breakpoints.tablet})) {
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`

export const HomeLogo = styled(Logo)`
  margin-top: 24px;
`

export const Title = styled.h1`
  max-width: 539px;
  width: 100%;
  position: absolute;
  line-height: 42px;
  top: 246px;
  text-align: center;
  font-weight: bold;
  font-size: 36px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
    line-height: 32px;
    top: 148px;
  }

  @media (max-width: ${breakpoints.small}) {
    font-size: 24px;
    line-height: 32px;
    top: 118px;
  }
`

export const RestaurantImage = styled(Image)`
  max-width: auto;
  width: 100%;
  display: flex;
  height: 186px;
  align-items: center;
  padding: 0 32px;

  span {
    margin-right: 4px;
    font-weight: bold;
  }

  button {
    width: 256px;
    border: none;
    background-color: transparent;
    color: ${Colors.fontColor};
    font-weight: bold;
    font-size: 18px;
    margin-right: 150px;
    cursor: pointer;

    @media (max-width: ${breakpoints.small}) {
      width: 80px;
      font-size: 12px;
      margin-right: 0;
    }

    @media ((min-width: ${breakpoints.small}) and (max-width: ${breakpoints.mobile})) {
      width: 80px;
      font-size: 12px;
      margin-right: 0;
    }

    @media ((min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})) {
      width: 256px;
      margin-right: 0;
    }

    @media ((min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})) {
      width: 256px;
      margin-right: 0;
    }
  }

  @media (max-width: ${breakpoints.small}) {
    height: 138px;
  }

  @media ((min-width: ${breakpoints.small}) and (max-width: ${breakpoints.mobile})) {
    height: 138px;
  }
`

export const RestaurantLink = styled(Link)`
  width: 108px;
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  margin-left: 168px;
  color: ${Colors.fontColor};

  @media (max-width: ${breakpoints.small}) {
    width: 80px;
    font-size: 14px;
    margin-left: 0;
  }

  @media ((min-width: ${breakpoints.small}) and (max-width: ${breakpoints.mobile})) {
    width: 80px;
    font-size: 14px;
    margin-left: 0;
  }

  @media ((min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})) {
    width: 108px;
    margin-left: 40px;
  }

  @media ((min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})) {
    width: 108px;
    margin-left: 32px;
  }
`
