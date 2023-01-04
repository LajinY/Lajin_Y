import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItems/MealItem";

import Card from "../UI/Card";

const Dummy_Meals = [
  {
    id: "m1",
    name: "Kothu Parotta",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Muttai Kalaki",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Beef Kallu",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Murthappam",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const mealsList = Dummy_Meals.map((meal) => (
    <MealItem
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
