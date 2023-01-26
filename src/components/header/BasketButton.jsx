import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/basket-icon.svg";

export const BasketButton = ({ count }) => {
  return (
    <StyledButton>
      <BasketIcon />
      <StyledTitle>You Cart</StyledTitle>
      {count|| 0 }
    </StyledButton>
  );
};



const StyledButton = styled.button`
  background: #5a1f08;
  color: #fff;
  border-radius: 20px;
  padding: 12px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #2c0d00;
  }

  &:hover > #counter {
    background: #662207;
  }
`;

const StyledTitle = styled.span`
  margin-left:12px;
  margin-right:24px;
`;

// const StyledCounter = styled.span`
//   background: #8a2b06;
//   border-radius: 30px;
//   color: #fff;
//   font-weight: 700;
//   font-size: 20px;
//   line-height: 27px;
//   padding: 4px 20px;
// `;
