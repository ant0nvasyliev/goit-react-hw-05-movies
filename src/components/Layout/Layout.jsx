import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {NavContainer } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <NavContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </NavContainer>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;