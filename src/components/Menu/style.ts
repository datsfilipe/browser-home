import styled from 'styled-components'

const MenuContainer = styled.div`
  margin-top: 4rem;
  height: 40px;
  max-width: 400px;
  border-radius: 15px;

  position: relative;
  background-color: ${props => props.theme.dark.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    background-color: #8c75ff;
    -webkit-box-shadow: inset 0px 0px 5px #6c5ac7;
    -moz-box-shadow: inset 0px 0px 5px #6c5ac7;
    box-shadow: inset 0px 0px 5px #6c5ac7;
    outline: none;
    transition: all 300ms;
  }
`

const Dropdown = styled.div`
  height: 16px;
  width: 18px;
  margin-left: 14px;
  margin-bottom: 4px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    margin-top: 0;
    width: 20px;
    height: 20px;
  }
`

const EditButton = styled.button`
  margin-top: 4px;
  margin-right: 14px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    margin-top: 0;
    width: 26px;
    height: 26px;
  }
`

const Span = styled.span`
  padding: 0 100px;
  font: 18px 'Poppins', sans-serif;
  font-weight: 700;
  color: ${props => props.theme.dark.text};
`

export {Span, MenuContainer, Dropdown, EditButton}
