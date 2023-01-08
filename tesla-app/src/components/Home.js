import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model Y"
        description="Order online for touchless delivery"
        backgroundImg="model Y.jpg"
        UpButton="Order"
        DownButton="LearnMore"
      />
      <Section
        title="Model X"
        description="Order online for touchless delivery"
        backgroundImg="model x.jpg"
        UpButton="Order"
        DownButton="LearnMore"
      />
      <Section
        title="Model S"
        description="Order online for touchless delivery"
        backgroundImg="model s.jpg"
        UpButton="Order"
        DownButton="LearnMore"
      />
      <Section
        title="Solar Panels"
        description="Order online for touchless delivery"
        backgroundImg="solar panels.jpg"
        UpButton="Order"
        DownButton="LearnMore"
      />
      <Section
        title="Accessories"
        description="Order online for touchless delivery"
        backgroundImg="accessories.jpg"
        UpButton="Order"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
