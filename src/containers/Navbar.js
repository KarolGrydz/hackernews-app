import React, { useContext } from 'react';
import { Context } from '../context/sidebarContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  NavbarButton,
  NavbarWrapper,
  NavbarTittle
} from '../styles/NavbarStyle';

export const Navbar = () => {
  const [state, setState] = useContext(Context);
  const { sidebar } = state;

  const toggleSidebar = () => {
    setState({ sidebar: !sidebar });
  };
  return (
    <NavbarWrapper>
      <NavbarButton onClick={toggleSidebar}>
        <GiHamburgerMenu />
      </NavbarButton>
      <NavbarTittle>Tech News</NavbarTittle>
    </NavbarWrapper>
  );
};
