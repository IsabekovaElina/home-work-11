import React from "react";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../../assets/icons/Vector.svg";
import { Button } from "../../UI/Button";
const MealItemForm = ({ id }) => {
  return (
    <StyledForm>
      <Container>
        <label htmlFor={id}>Amount</label>
        <input type="number" id={id} min={1} max={5} defaultValue={1} />
      </Container>
      <Button>
        <StyledIcon />
        Add
      </Button>
    </StyledForm>
  );
};
export default MealItemForm;
const StyledIcon = styled(PlusIcon)`
  margin-right: 10px;
`;
const Container = styled.div`
  margin-bottom: 12px;
  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
    margin-right: 20px;
  }
  input {
    background: #FFFFFF;
    width: 60px;
    height: 32px;
    border: 1px solid #D6D6D6;
    border-radius: 10px;
    outline: none;
    padding: 4px 12px;
    font-weight: 600;
    font-style: 16px;
    line-height: 24px;
  }
`;
const StyledForm = styled.form`
  flex-direction: column;
  align-items: flex-end;
`;





