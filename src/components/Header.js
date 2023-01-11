import React, { useEffect } from "react";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setUserSignOut,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider } from "../../src/firebase";
import { signInWithPopup } from "firebase/auth";

function Header() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const UserName = useSelector(selectUserName);
  const UserPhoto = useSelector(selectUserPhoto);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history("/");
      }
    });
  }, []);
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        let user = result.user;
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setUserSignOut());
      history("/login");
    });
  };

  return (
    <Nav>
      <Logo img src="images/logo.svg" />
      {!UserName ? (
        <Container>
          <Login onClick={signIn}>Login</Login>
        </Container>
      ) : (
        <>
          {" "}
          <NavMenu>
            <li>
              <Link to={"/"}>
                <img src="/images/home-icon.svg" />
              </Link>

              <span>Home</span>
            </li>
            <li>
              <img src="/images/search-icon.svg" />
              <span>Search</span>
            </li>
            <li>
              <img src="/images/watchlist-icon.svg" />
              <span>WatchList</span>
            </li>
            <li>
              <img src="/images/original-icon.svg" />
              <span>Originals</span>
            </li>
            <li>
              <img src="/images/movie-icon.svg" />
              <span>Movies</span>
            </li>
            <li>
              <img src="/images/series-icon.svg" />
              <span>Series</span>
            </li>
          </NavMenu>
          <UserImg onClick={signOut} src="/images/lajin.jpg"></UserImg>
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  padding: 0 36px;
  align-items: center;
  // position: fixed;
`;

const Logo = styled.img`
  width: 80px;
  margin-right: 25px;
`;

const NavMenu = styled.div`
  display: flex;
  // position: fixed;
  flex: 1;
  margin: 0 200px;
  align-items: center;
  // overflow-x: hidden;

  li {
    display: flex;
    padding: 0 12px;
    margin: 0 25px;
    align-itmes: center;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      letter-spacing: 1.42px;
      font-size: 13px;
      position: relative;

      &:after {
        content: "";
        background: white;
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: left center;
        transform: scaleX(0);
      }
    }
    :hover {
      span:after {
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 50px;
`;

const Login = styled.button`
  background: gray;
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 14px;
  letter-spacing: 1.05px;
  font-weight: bold;

  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: white;
    transform: scaleX(1.05);
    border-color: gray;
  }
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
