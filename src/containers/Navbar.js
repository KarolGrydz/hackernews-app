import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../router';
import { Context } from '../context/sidebarContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavbarButton, NavbarWrapper } from '../styles/NavbarStyle';

export const Navbar = () => {
  const [state, setState] = useContext(Context);
  const { sidebar } = state;

  const toggleSidebar = () => {
    setState({ sidebar: 'visible' });
  };
  return (
    <NavbarWrapper>
      <NavbarButton onClick={toggleSidebar}>
        <GiHamburgerMenu />
      </NavbarButton>
      {routes.map(route => (
        <Link key={route.state.id} to={route.pathname}>
          {route.state.title !== 'Author' ? route.state.title : null}
        </Link>
      ))}
    </NavbarWrapper>
  );
};
