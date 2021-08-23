import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Aside = styled.aside`
  margin-top: 105px;
  flex: 1;

  img {
    width: 600px;
  }
`;

const Form = styled.form`
  display: flex;

  flex: 1;
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
`;

const Categories = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  gap: 8px;
`;

const Footer = styled.footer`
  a {
    display: block;
  }
`;

export { Container, Form, Categories, Main, Aside, Footer };
