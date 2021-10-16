import styled from "styled-components";

const MenuContentContainer = styled.div`
  display: none;
  position: absolute;
  top: 110%;
  padding: 32px;
  overflow-y: auto;

  background-color: ${props => props.theme.dark.primary};

  z-index: 1;
  border-radius: 20px;

  border: 1px solid #44475A75;
`;

const Ul = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  list-style: none;
`;

const Li = styled.li`
  color: ${props => props.theme.dark.text};
  font: 16px 'Poppins', sans-serif;
  font-weight: 500;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 5px;

  &#add-item {
    padding-bottom: 12px;
  }

  &.list-item {
    margin-top: 5px;
    border-bottom: 1px solid #44475A75;
    &:hover {
      cursor: pointer;
      border-color: rgba(0,0,0,0.4);
    }
  }
`;

const ButtonAdd = styled.button`
  background-color: transparent;
  display: flex;

  width: 32px;
  border-radius: 15px;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${props => props.theme.dark.text};
  font: 16px 'Poppins', sans-serif;
  font-weight: 500;

  ::placeholder {
    color: ${props => props.theme.dark.text};
    opacity: 0.6;
  }
`;

const Content = styled.div`
  width: 100%;
  display: inline-flex;
`;

export { MenuContentContainer, Ul, Li, ButtonAdd, Input, Content };

