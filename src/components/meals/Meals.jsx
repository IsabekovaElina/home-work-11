
import React from 'react'
import styled from "styled-components"
import MealItem from './meal-Item/MealItem';


  const DUMMY_MEALS = [
    {
      id:1,
      title: "Sushi",
      description: "Finest fish and veggies",
      price: '$22.99',
    },
    {
      id: 2,
      title: "Schnitzel",
      descrition: "A german speciality",
      price: '$16.0',
    },
    {
      id: 3,
      title: "Barbecue Burger",
      descrition: "American, raw, meaty",
      price: '$12.99',
    },
    {
      id: 4,
      title: "Green Bowl",
      descrition: "Healthy...and green...",
      price:  '$19.99',
    },
  ];
  const Meals = () => {
    return (
      // <Card>
      <Card>
        {DUMMY_MEALS.map((meal) => {
          return <MealItem meal={meal} key={meal} />;
        })}
      </Card>
      // </Card>
    );
  };

export default Meals;

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width:64.9375rem;
  margin:40px auto;
  padding:40px 40px 16px 40px ;
`;