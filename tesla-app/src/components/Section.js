import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
          <h3>{props.description} </h3>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <UpButton>{props.UpButton}</UpButton>
            {props.DownButton && <DownButton>{props.DownButton}</DownButton>}
          </ButtonGroup>
          <DownArrow img src="/images/arrow-down.png"></DownArrow>
        </Fade>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: ${(props) => `url("images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  font-weight: bold;
  text-align: center;
  padding-top: 15vh;
  color: blue;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const UpButton = styled.div`
  height: 40px;
  width: 250px;
  background-color: orange;
  color: Black;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const DownButton = styled(UpButton)`
  background: black;
  color: orange;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
