import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  align-self: center;
  display: flex;

  width: 80vw;
  height: 100vh;

  textarea {
    color: ${props => props.theme.dark.text}
  }

  aside {
    margin-top: 105px;
    flex: 1;

    img {
      width: 600px;
    }
  }
`;

const Form = styled.form`
  display: flex;

  flex: 1;
  flex-direction: column;
`;

const SearchBar = styled.div`
  height: 55px;
  display: flex;
  justify-content: center;
  flex-direction: row;

  margin-top: 185px;

  button {
    width: 55px;
    border-radius: 15px 0 0 15px;
    border: none;
  }

  input {
    border: none;
    min-width: 400px;
    outline: none;
    border-radius: 0 15px 15px 0;
    padding-left: 8px;

    font: 22px 'Roboto', sans-serif;
    color: ${props => props.theme.dark.text}
  }
`;

const Categories = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  gap: 8px;
`;

const MenuContent = styled.div`
  width: 100%;
  margin-top: 170px;

  display: none;
  position: absolute;

  background-color: ${props => props.theme.dark.border};

  z-index: 1;
  border: none;
  border-radius: 15px;

  ul {
    padding: 32px;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    list-style: none;

    /* li {

    } */
  }
`;

const Menu = styled.div`
  margin-top: 4rem;
  height: 40px;
  border-radius: 15px;

  position: relative;
  background-color: ${props => props.theme.dark.border};

  display: flex;
  align-items: center;

  button {
    margin-left: 0;
    margin-right: auto;
    width: 40px;
    height: 40px;
    border-radius: 15px 0 0 15px;
    border: none;
  }

  span {
    padding: 0 60px 0 60px;
    margin-left: 0;
    margin-right: auto;
    font: 18px 'Poppins', sans-serif;
    color: ${props => props.theme.dark.secondary};
  }

  &:hover ${MenuContent} {
    display: block;
  }
`;

export { Container, SearchBar, Main, Form, Menu, MenuContent, Categories };
