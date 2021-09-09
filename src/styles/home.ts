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

const Main = styled.main`
  align-self: center;
  display: flex;

  width: 80vw;
  height: 100vh;

  #container {
    flex: 1;
  }

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

export { Container, Categories, Main, Aside, Footer };
