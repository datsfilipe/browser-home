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
  }
`;

const Button = styled.button`
  background: ${props => props.theme.dark.primary};
  width: 40px;
  height: 40px;
  border-radius: 15px 0 0 15px;
  border: none;
`;

export { Container, SearchBar, Main, Form, Button };
