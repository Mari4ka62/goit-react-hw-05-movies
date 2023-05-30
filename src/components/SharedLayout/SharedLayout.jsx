import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Item, Nav, StyledLink } from './SharedLayout.styled';

export function SharedLayout() {
  return (
    <>
      <Header>
        <Nav>
          <Item>
            <StyledLink to="/">Home</StyledLink>
          </Item>
          <Item>
            <StyledLink to="movies">Movies</StyledLink>
          </Item>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
