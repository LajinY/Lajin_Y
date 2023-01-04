import React from "react";
import classes from "./MealSummary.module.css";

const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food!, Healthy Food!</h2>
      <p>
        Food is any substance consumed by an organism for nutritional support.
        Food is usually of plant, animal, or fungal origin, and contains
        essential nutrients, such as carbohydrates, fats, proteins, vitamins, or
        minerals. The substance is ingested by an organism and assimilated by
        the organism's cells to provide energy, maintain life, or stimulate
        growth. Different species of animals have different feeding behaviours
        that satisfy the needs of their unique metabolisms, often evolved to
        fill a specific ecological niche within specific geographical contexts.
      </p>
    </section>
  );
};

export default MealSummary;
