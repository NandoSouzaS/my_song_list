import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        color: whitesmoke;
        margin:0px;
        background-color: #1f2123;
    }
    .root{
        width: 100vh;
        height: 100vh;
    }

    :root{
        --border: thin solid rgba(235,235,235,0.1);
    }
`;

export const Header = styled.header`
    box-sizing: border-box;

    border-bottom: var(--border);
    grid-area: headerGridArea;

    h1{
        text-align:center;
    }
`;

export const Menu = styled.aside`
    color: gray;
    font-size: 20px;
    border-right: var(--border);

    grid-area: menuGridArea;
`;

export const Content = styled.main`
    grid-area: contentGridArea;
`;

export const Footer = styled.footer`
    grid-area: footerGridArea;
    border-top:var(--border);

`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 25vh 1fr 25vh;
    grid-template-rows: 10% 1fr 5%;
    grid-template-areas: 
    "menuGridArea headerGridArea headerGridArea"
    "menuGridArea contentGridArea contentGridArea"
    "footerGridArea footerGridArea footerGridArea";
`;