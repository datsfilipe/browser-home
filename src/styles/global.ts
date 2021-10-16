import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: ${props => props.theme.dark.text};
    text-decoration: none;
  }

  body {
    background: ${props => props.theme.dark.background};
    color: ${props => props.theme.dark.text};
    font-family: Roboto;

    /* class for applying styles to toggle menu */
    .show {
      display: block;
    }

    .popup-overlay {
      background-color: rgba(14,14,14,0.4);
    }
  }
`
