import React from "react";
import styled from "styled-components";
import { BasketButton } from "../header/BasketButton";

const Header = ({ count =0 }) => {
  return (
    <Container>
      <Logo>ReactMeals </Logo>
      <BasketButton>{(count =0)}</BasketButton>
     
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 101px;
  background-color: #8a2b06;
  padding: 0 120px;
  align-items: center;
`;

const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`;
