import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    body {
        min-height: 100vh;
        background: ${props => props.theme.colors.background};
    }
    body,
    input,
    button,
    textarea,
    select {
        font-family: ${props => props.theme.fonts.primary};
        font-weight: 400;
        font-size: 1.6rem;
        color: ${props => props.theme.colors.font};
    }
    img {
        display: block;
    }
    ul {
        list-style: none;
    }
    a,
    a:link,
    a:visited {
        text-decoration: none;
    }
    .constraint {
        max-width: 1700px;
        margin: 0 auto;
    }
`