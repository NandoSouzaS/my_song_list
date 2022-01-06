import styled, { createGlobalStyle } from "styled-components";
import Font from "./fonts/openSansRegular.ttf";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Open-Sans';
    src: url(${Font});
}
*{
    color: rgba(235,235,235,0.9);
    margin:0px;
    background-color: #1f2123;
    font-family: Open-Sans,Arial,sans-serif;
    font-weight: lighter;
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
  display: flex;
  width: 100%;
  height: 80px;
  flex-direction: column;
  align-items: center;
  position: fixed;
  margin-left: 50px;

  border-bottom: var(--border);
  grid-area: headerGridArea;

  h1 {
    text-justify: center;
    text-align: center;
  }

  input {
    color: black;
    background-color: rgba(235, 235, 235, 0.9);
    margin-top: 10px;
    width: 30%;
  }
`;

export const Logo = styled.div`
  grid-area: logoGridArea;
  margin: 10px;
`;

export const Menu = styled.aside`
  border-right: var(--border);
  grid-area: menuGridArea;
  position: fixed;
  height: 100%;
  width: 100px;
  li {
    background-color: none;
    font-size: 13px;
    font-weight: bold;
    margin-top: 100px;
    margin-left: 10px;
    list-style: none;
    overflow: hidden;
  }
`;

export const Content = styled.main`
  overflow: visible;
  margin: 20px;
  grid-area: contentGridArea;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  background-color: rgb(50, 50, 50);
  width: 300px;
  height: 300px;
  justify-content: space-evenly;

  img {
    background-color: rgba(235, 235, 235, 0);
  }

  h1 {
    background-color: inherit;

    font-size: 15px;
    font-weight: normal;
  }

  p {
    font-size: 10px;
    font-weight: lighter;
    background-color: inherit;
  }
  time {
    font-size: 10px;
    background-color: inherit;
  }
`;
export const BtnHolder = styled.div`
  background-color: inherit;
  display: flex;
  flex-direction: row-reverse;
  a {
    box-sizing: border-box;
    background-color: rgba(235, 235, 235, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin: 3px;
    border-width: 2px;
    border-color: black;
    border-style: outset;
  }
  button {
    background-color: rgba(235, 235, 235, 1);
    border-color: red;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    font-size: 18px;
    border-radius: 50%;
    margin: 3px;
    color: red;
    font-family: sans-serif;
    font-weight: bolder;
  }
  img {
    width: 15px;
    height: 15px;
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const Footer = styled.footer`
  grid-area: footerGridArea;
  border-top: var(--border);
  text-align: center;
  padding-top: 20px;
  margin-left: 100px;

  .devName {
    font-family: "elvish", monospace;
    font-weight: thin;
  }
  .heart {
    animation: pulsing 3s linear infinite;
    color: rgb(207, 7, 7);
    display: inline-block;
  }

  @keyframes pulsing {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.25);
    }
    50% {
      transform: scale(1.5);
    }
    75% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (max-width: 546px) {
    footer {
      bottom: 3%;
      left: 3%;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 100px 1fr 25vh;
  grid-template-rows: 80px 1fr 10%;
  grid-template-areas:
    "logoGridArea headerGridArea headerGridArea"
    "menuGridArea contentGridArea contentGridArea"
    "footerGridArea footerGridArea footerGridArea";
`;
