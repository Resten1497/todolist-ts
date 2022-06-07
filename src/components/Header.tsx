import styled from "styled-components";

export default function Header() {
  return <StyledHeader>React.js로 만든 TO-DO APP</StyledHeader>;
}

const StyledHeader = styled.header`
  background-color: #00462a;
  color: #ffffff;
  font-size: 2rem;
  height: 7rem;
  display: flex;
  align-items: center;
  padding-left: 5rem;
`;
