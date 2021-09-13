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

const AuthButton = styled.button`
  cursor: pointer;
  position: absolute;
  width: 135px;
  height: 40px;
  top: 30px;
  right: 30px;

  border: 1px solid #13111B;
  border-radius: 20px;
  background-color: #201A2D;
  font: 14px "Poppins";
  color: ${props => props.theme.dark.text};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  &:hover {
    background-color: #13111B;
  }

  img {
    border-radius: 50%;
  }
`;

const Footer = styled.footer`
  a {
    display: block;
  }
`;

export { Container, Categories, Main, Aside, Footer, AuthButton };
