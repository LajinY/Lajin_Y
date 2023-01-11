import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <Link to={"/details"}>
            <img src="/images/cap.jpg" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to={"/details"}>
            <img src="/images/cap.jpg" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to={"/details"}>
            <img src="/images/cap.jpg" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to={"/details"}>
            <img src="/images/cap.jpg" />
          </Link>
        </Wrap>
      </Content>
      <h4>Marvel</h4>
      <Content>
        <Wrap>
          <Link to={"/details"}>
            <img src="/images/camerica.jpg" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to={"/details"}>
            <img src="/images/camerica.jpg" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to={"/details"}>
            <img src="/images/camerica.jpg" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to={"/details"}>
            <img src="/images/camerica.jpg" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  //   margin-top: 30px;
  display: grid;
  grid-gap: 25px;
  //   padding: 30px 0px 26px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  cursor: pointer;
`;

const Wrap = styled.div`
  border: 3px solid gray;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    heigth: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    background: white;
  }
`;
