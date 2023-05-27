import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export function SharedLayout() {
  return (
    <>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="movies">Movies</NavLink>
        </nav>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
