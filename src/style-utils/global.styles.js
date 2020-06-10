import { createGlobalStyle, css } from "styled-components";

import { FlexCenter } from "./utils.styles.jsx";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}

body{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.4rem;
    width: 100vw;
    font-family: 'Inter', sans-serif;
    background: ${({ theme: { colors } }) => colors.background};
    min-height: 100vh;
    transition: background 1s;
}

#root {
    width: 100%;
    padding-top: 7rem;
    ${FlexCenter}
    flex-direction: column;

    .overview-header {
        margin-top: 2rem;
        color: ${({ theme: { colors } }) => colors.textSub};
    }
}

a{
    text-decoration: none;
}

a:link,
a:visited{
    color: unset;
}

ul, li {
    list-style: none;
}

button {
    font-family: inherit;
}
`;

export default GlobalStyles;
