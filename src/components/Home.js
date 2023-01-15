import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <img src="/images/bg.jpg"></img>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  img {
    height: calc(100vh - 70px);
    width: 100vw;
  }
`;
