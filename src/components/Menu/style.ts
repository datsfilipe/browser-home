import styled from "styled-components";
import { MenuContentContainer } from "../MenuContent/style";

const MenuContainer = styled.div`
  margin-top: 4rem;
  height: 40px;
  border-radius: 15px;

  position: relative;
  background-color: ${props => props.theme.dark.border};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover ${MenuContentContainer} {
    display: block;
  }
`;

const Span = styled.span`
  padding: 0 100px;
  font: 18px 'Poppins', sans-serif;
  color: ${props => props.theme.dark.secondary};
`;

export {Span, MenuContainer};
