import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Box = styled.main`
  padding: 20px 20px;
`;
const Title = styled.h1`
  font-sise: 20px;
  font-weight: 700;
  text-align: center;
`;
const Item = styled.li`
  font-size: 15px;
  padding-bottom: 5px;
`;
const Input = styled.input`
  width: 300px;
  psdding: 5px;
  margin-right: 5px;
`;
const ButtonBack = styled.button`
  display: inline-block;
  font-size: 16px;
  color: #000;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid black;
  background-color: transparent;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;


  &:hover {
    background-color: grey;`;
const Container = styled.div`
  display: flex;
  padding: 15px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
const Image = styled.img`
  display: block;
  height: 400px;
  width: 100%;
  object-fit: cover;
`;
const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const AdditionalList = styled.ul`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  padding-bottom: 20px;
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
export {
  Title,
  Box,
  Item,
  Input,
  ButtonBack,
  Container,
  Image,
  MovieInfo,
  AdditionalList,
  StyledLink,
};
