import { createGlobalStyle } from 'styled-components'

export const Colors = {
  fontColor: '#E66767',
  fontColorSecondary: '#FFEBD9',
  corDeFundo: '#FFF8F2',
  white: '#fff',
  black: '#000'
}

export const breakpoints = {
  desktop: '1025px',
  tablet: '769px',
  mobile: '426px',
  small: '325px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${Colors.corDeFundo};
    color: ${Colors.fontColor};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 90%;
    }
  }
`
