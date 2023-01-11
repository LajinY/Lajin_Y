import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CtaImg src="images/cta-logo-one.svg" />
        <SignIn>GET ALL THERE</SignIn>
        <Desc>
          WebHotstar has been discontinued in the US, but you can enjoy LIVE
          cricket, your favorite Indian entertainment, & more with The Disney
          Bundle (Disney+, Hulu, and ESPN+).
        </Desc>
        <CtaImg2 src="images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: top;

  &:before {
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("/images/login-background.jpg");
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.6;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

const CtaImg = styled.img``;
const CtaImg2 = styled.img`
  width: 90%;
`;

const SignIn = styled.a`
  background: blue;
  font-size: 20px;
  text-align: center;
  padding: 17px 200px;
  font-weight: 20px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 5px;
  &:hover {
    transform: scaleX(1.05);
    background: gray;
  }
`;

const Desc = styled.p`
  margin-top: 5px;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
