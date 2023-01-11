import React from "react";

import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-gap: 25px;
  padding: 30px 0px 26px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  cursor: pointer;
`;

const Wrap = styled.div`
  border: 3px solid gray;
  border-radius: 10px;
  box-shadow: white;
  img {
    width: 100%;
    height: 100%;
    object-fit: center;
  }
  &:hover {
    transform: scale(1.05);
    border-color: white;
  }
`;
