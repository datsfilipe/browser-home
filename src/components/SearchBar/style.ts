import styled from "styled-components";

const SearchBarContainer = styled.div`
  height: 55px;
  display: flex;
  justify-content: center;
  flex-direction: row;

  margin-top: 185px;
`;

const Input = styled.input`
  border: none;
  min-width: 400px;
  outline: none;
  border-radius: 0 15px 15px 0;
  padding-left: 8px;

  font: 22px 'Roboto', sans-serif;
  color: ${props => props.theme.dark.text}
`;

export { SearchBarContainer, Input };
