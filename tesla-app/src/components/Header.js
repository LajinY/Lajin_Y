import React, { useState } from "react";
import styled from "styled-components";
import "./sample.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/Car/CarSlice";
import { useSelector } from "react-redux";
import zIndex from "@mui/material/styles/zIndex";

function Header() {
  const [BurgerState, SetBurgerState] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <img className="image" src="/images/ll.png" />

      <Menu>
        {cars &&
          cars.map((cars, index) => (
            <a key={index} href="#">
              {cars}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu
          onClick={() => {
            SetBurgerState(true);
          }}
        />
      </RightMenu>
      <BurgerNav show={BurgerState}>
        <CustomBtn>
          <ClsButton
            onClick={() => {
              SetBurgerState(false);
            }}
          />
        </CustomBtn>
        {cars &&
          cars.map((cars, index) => (
            <li>
              <a key={index} href="#">
                {cars}
              </a>
            </li>
          ))}

        <li>
          <a href="#">Trade</a>
        </li>
        <li>
          <a href="#">Marketing</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  position: fixed;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0%;
  right: 0%;
  left: 0%;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 30px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  color: black;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.25s; //ease-in-ease-out
  li {
    padding: 15px 0;
    border-bottom: 1px solid black;
  }
`;

const ClsButton = styled(CloseIcon)`
  cursor: pointer;
`;

const CustomBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;
