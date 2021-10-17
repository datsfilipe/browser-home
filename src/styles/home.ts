import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Aside = styled.aside`
  margin-top: 105px;
  flex: 1;
  max-width: 600px;
`

const Main = styled.main`
  align-self: center;
  display: flex;

  width: 80vw;
  height: 100vh;

  #container {
    flex: 1;
  }

  textarea {
    color: ${props => props.theme.text}
  }
`

const Categories = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  gap: 8px;
`

const AuthButton = styled.button`
  cursor: pointer;
  position: absolute;

  height: 48px;
  max-width: 90px;
  top: 30px;
  right: 30px;

  border: 1px solid ${props => props.theme.border};
  border-radius: 50px;
  background-color: ${props => props.theme.primary};
  font: 14px "Poppins";
  color: ${props => props.theme.text};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
  .username {
    display: none;
  }
  transition: max-width 0.2s;

  &:hover {
    max-width: 135px;
    .username {
      display: inline-flex;
    }
  }

  img {
    height: 30px;
    border-radius: 50%;
  }
`

const Footer = styled.footer`
  display: flex;
  gap: 10px;
  position: absolute;
  left: 20px;
  font-family: Poppins;
  font-size: .8rem;
  font-weight: 400;
  bottom: 10px;
  opacity: 0.6;
  color: ${props => props.theme.textSecondary};
  transition: opacity 300ms;
  a {
    display: block;
    color: ${props => props.theme.textSecondary};
  }
  strong {
    color: ${props => props.theme.text};
  }
  &:hover {
    opacity: 1;
  }
`

export { Container, Categories, Main, Aside, Footer, AuthButton }
