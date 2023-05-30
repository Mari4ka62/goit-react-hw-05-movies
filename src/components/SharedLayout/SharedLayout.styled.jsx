import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
const Item = styled.li`
  font-size: 20px;
  font-weight: 700;
  margin-right: 15px;
`;
const Nav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: red;
  }
`;
export { Header, Item, Nav, StyledLink };
