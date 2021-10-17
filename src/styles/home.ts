import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  footer {
    position: -webkit-sticky;
    display: block;
    align-self: flex-end;
    padding: 12px;
    color: ${props => props.theme.textSecondary};
    font-family: Poppins, sans-serif;
    font-size: 14px;

    strong {
      font-weight: 400;
      color: ${props => props.theme.text};
    }

    a {
      color: ${props => props.theme.textSecondary};
    }
  }


  @media (max-width: 1100px) {
    main {
      gap: 50px;
      justify-content: center;
      margin-top: 0;

      aside {
        margin-top: 20%;
        max-width: 350px;
      }

      #container {
        max-width: 350px;
      }
    }
  }
  @media (max-width: 900px) {
    main {
      flex-direction: column;
      align-items: center;
      gap: 0;

      aside {
        margin-top: 20%;
      }

      #container {
        margin-top: 5%;
      }
    }
  }
  @media (max-width: 500px) {
    main {
      flex-direction: column;
      align-items: center;
      gap: 0;

      aside {
        margin-top: 10%;
      }

      #container {
        margin-top: 15%;

        [class*="SearchBarContainer-"] {
          height: 50px;
          input {
            width: 280px;
          }
          button {
            div {
              height: 34px;
            }
          }
        }
        [class*="Categories-"] {
          [class*="MenuContainer-"] {
            span {
              padding: 0 80px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 400px) {
    main {
      margin-top: 20%;
      flex-direction: column;
      align-items: center;
      gap: 0;

      aside {
        margin-top: 70px;
      }

      #container {
        margin-top: 10%;

        [class*="SearchBarContainer-"] {
          height: 40px;
          input {
            width: 230px;
          }
          button {
            div {
              height: 34px;
            }
          }
        }
        [class*="Categories-"] {
          [class*="MenuContainer-"] {
            span {
              padding: 0 50px;
            }
          }
        }
      }
    }
  }
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
  min-height: 90vh;
  padding-bottom: 30px;

  #container {
    flex: 1;
    margin-top: 18%;
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
  height: 45px;
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

export { Container, Categories, Main, Aside, AuthButton }
