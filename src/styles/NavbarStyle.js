import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  z-index: 100;
  background: #fafafe;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
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

export const NavbarTittle = styled.h1`
  text-align: left;
  margin-left: 25px;
  margin-top: 25px;
`;
