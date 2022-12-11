import { createGlobalStyle } from 'styled-components';
import { Color, Size } from '../enums';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Ubuntu', -apple-system, system-ui, sans-serif;
  }
  html {
    min-height: 100%;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(55, 28, 109, 1) 95%);
    font-size: 62.5%;
  }

  @media (max-width: 900px) {
    html {
      font-size: 50.668%;
    }
  }

  body, a {
    color: ${Color.Text};
    font-size: ${Size.Default};
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
  }
  body, input, button {
    font-weight: 200;
  }
  h1, strong {
    font-weight: 400,
  }

  h2, h3, h4, h5, h6 {
    font-weight: 300;
  }

  p {
    font-size: 1.6rem;
    line-height: 32px;
  }

  button {
    cursor: pointer;
  }

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;
