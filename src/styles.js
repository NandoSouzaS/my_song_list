import styled, { createGlobalStyle } from "styled-components";
import Font from "./fonts/openSansRegular.ttf";
import Elvish from "./fonts/elvish_ring_nfi.ttf";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Open-Sans';
    src: url(${Font});
    font-family: 'elvish';
    src: url(${Elvish});
}
*{
    color: rgba(235,235,235,0.9);
    margin:0px;
    background-color: #1f2123;
    font-family: "Open-Sans",Arial,sans-serif;
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
  border-bottom: var(--border);
  grid-area: headerGridArea;

  h1 {
    text-justify: center;
    text-align: center;
  }
  div {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
  }
  input {
    color: black;
    background-color: rgba(235, 235, 235, 0.9);
    width: 67%;
    border: none;
    outline: none;
  }
  button {
    width: 30%;
    border: none;
    color: black;

    background-color: rgba(235, 235, 235, 0.9);
  }
`;
export const SideBar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-right: var(--border);
  grid-area: sideBarGridArea;
  height: 100%;
  width: 100px;
`;

export const Logo = styled.div`
  grid-area: logoGridArea;
  margin: 10px;
`;

export const Menu = styled.div`
  position: fixed;
  margin-top: 10vh;
  width: 100px;
  height: 30vh;
  li {
    padding-top:calc(15vh/2 - 11px);
    text-align: center;
    box-sizing: border-box;
    height: calc(100% / 2);
    width: 100%;
    font-size: 13px;
    font-weight: bold;
    list-style: none;
    overflow: hidden;
    transition: all 0.2s linear;
    cursor: pointer;
  }
  li:hover {
    color: red;
    //background-color: rgba(235, 235, 235, 0.2);
  }
`;

export const Content = styled.main`
  background-color: black;
  overflow: visible;

  grid-area: contentGridArea;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  background-color: rgb(50, 50, 50);
  width: fit-content;
  height: fit-content;
  justify-content: space-between;
  border-radius: 5%;

  img {
    background-color: rgba(235, 235, 235, 0);
    border-top-right-radius: 5%;
    border-top-left-radius: 5%;
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
  justify-content: end;
  box-sizing: border-box;

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
    border-color: darkgray;
    border-style: outset;
  }
  img {
    width: 15px;
    height: 15px;
    background-color: rgba(0, 0, 0, 0);
  }
`;
export const Button = styled.button`
  background-color: ${(props) =>
    props.fav ? "red" : "rgba(235, 235, 235, 1) "};
  color: ${(props) => (props.fav ? "rgba(235, 235, 235, 1)" : "red")};
  border-color: darkred;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  font-size: 18px;
  border-radius: 50%;
  margin: 3px;
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
    "sideBarGridArea contentGridArea contentGridArea"
    "footerGridArea footerGridArea footerGridArea";
`;
