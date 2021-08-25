import styled from "styled-components";

const MenuContainer = styled.div`
  margin-top: 4rem;
  height: 40px;
  border-radius: 15px;

  position: relative;
  background-color: ${props => props.theme.dark.primary};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Span = styled.span`
  padding: 0 100px;
  font: 18px 'Poppins', sans-serif;
  font-weight: 700;
  color: ${props => props.theme.dark.text};
`;

export {Span, MenuContainer};
