import React from "react";
import styled from "styled-components";

function Details() {
  return (
    <Container>
      <BackImg>
        <img src="/images/kn.jpg  " />
      </BackImg>
      <Title>
        <img src="/images/moon.jpg" />
      </Title>
      <Controls>
        <PlayBtn>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayBtn>
        <TrailerBtn>
          <img src="/images/play-icon-black.png" />
          <span>TRAILER</span>
        </TrailerBtn>
        <AddBtn>
          <span>+</span>
        </AddBtn>
        <GrpWthBtn>
          <img src="/images/group-icon.png" />
        </GrpWthBtn>
      </Controls>
      <Description>
        Steven Grant discovers he's been granted the powers of an Egyptian moon
        god. But he soon finds out that these newfound powers can be both a
        blessing and a curse to his troubled life.
      </Description>
    </Container>
  );
}

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const BackImg = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  height: 30vh;
  width: 35vw;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  padding: 40px 20px;
  display: flex;
  align-items: center;
`;
const PlayBtn = styled.button`
  padding: 0 20px;
  margin: 22px;
  background: blue;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  align-items: center;
  display: flex;
  border-radius: 4px;
  &:hover {
    background: white;
    transform: scale(1.1);
  }
`;
const TrailerBtn = styled(PlayBtn)`
  background: blue;
  box-border: white;
`;
const AddBtn = styled.button`
  margin: 22px;
  height: 44px;
  width: 44px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 50%;
  background: blue;
  cursor: pointer;
  span {
    font-size: 30px;
  }
  &:hover {
    background: white;
    transform: scale(1.1);
  }
`;
const GrpWthBtn = styled(AddBtn)``;

const Description = styled.p`
  letter-spacing: 1.5;
  font-size: 20px;
  max-width: 700px;
`;
