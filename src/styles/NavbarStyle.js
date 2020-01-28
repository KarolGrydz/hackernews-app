import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  height: 14vh;
  z-index: 100;
  background: #fafafe;
`;

export const NavbarButton = styled.button`
  margin: 15px;
  border: none;
  background-color: #fafafe;
  border-radius: 25px;
  padding: 15px;
  cursor: pointer;
  &:hover {
    background-color: #eaeafb;
  }
  &:focus {
    outline: none;
  }
  svg {
    height: 20px;
    width: 20px;
  }
`;
