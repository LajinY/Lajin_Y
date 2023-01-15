import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Nav>
      <LogoImg img src="/images/net.png" />
      <NavMenu>
        <li>
          <img src="/images/home-icon.svg" />
          <span>Home</span>
        </li>
        <li>
          <img src="/images/watchlist-icon.svg" />
          <span>WatchList</span>
        </li>
        <li>
          <img src="/images/loaddddd.png" />
          <span>Downloads</span>
        </li>
        <li>
          <img src="/images/search-icon.svg" />
          <input type="text" placeholder="Search Movies" />
        </li>
      </NavMenu>
      <SignIn>signIn</SignIn>
      <JoinIn>Join </JoinIn>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background:  #111;
  padding: 0 40px;
  align-items: center;
  display: flex;
  }
`;

const LogoImg = styled.img`
  width: 100px;
  padding: 20px 0;
  background: #111;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin: 0 170px;
  background: #111;
  span {
    color: white;
    letter-spacing: 1.15px;
    font-size: 15px;
    cursor: pointer;
    background: #111;
  }
  li {
    padding: 0 20px;
    margin: 0 25px;
    display: flex;
    align-items: center;
    // background: black;
  }
  img {
    height: 25px;
    cursor: pointer;
    // background: black;
  }
  input {
    outline: 0;
    border-width: 0 0 2px;
    border-color: white;
    background: #111;
    color: white;
  }
  input::placeholder {
    color: gray;
    padding: 0 0 0 40px;
  }
`;

const SignIn = styled.button`
  padding: 0 20px;
  text-transform: uppercase;
  // letter-spacing: 1.5px;
  background: red;
  border-radius: 4px;
  color: white;
  margin: 4px;
  transition: transform 450ms;
  &:hover {
    transform: scaleX(1.05);
  }
`;

const JoinIn = styled(SignIn)`
  background: black;
  border-color: white;
`;
