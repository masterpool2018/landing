import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import headerBg from "./headerBg.jpg";
import logo from "./mainLogo.png";

const Nav = styled.div`
  background: #202d3c;
  background-image: url(${headerBg});
  background-position: center center;
  background-size: cover;
  padding-bottom: 65px;
`;

const Wrapper = styled.div`
  padding-top: 200px;
`;

const Logo = styled.img`
  margin-bottom: 90px;
  max-width: 100%;
  height: auto;
`;

const Title = styled.h1`
  font-family: "basis33";
  font-size: 30px;
  margin: 0 0 65px 0;
  line-height: 23px;
`;

const Button = styled.a`
  font-family: "HelveticaBold";
  padding: 10px 22px 7px;
  background-color: transparent;
  border-radius: 20px;
  border: 2px solid #ffffff;
  color: #ffffff;
  margin: ${props => (props.primery ? "0 30px 0 0" : "0")};
  white-space: nowrap;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background-color: #18daf7;
    border: 2px solid transparent;
  }

  &:focus {
    outline: none;
  }
`;

const Header = props => {
  const { transparent } = props;

  return (
    <Nav>
      <Navbar transparent={transparent} />
      <Wrapper>
        <div className="container">
          <div className="row center-xs">
            <div className="col-xs-12">
              <Logo src={logo} />
            </div>
            <Title>
              Transparent system for collective masternode and Proof of Stake
              mining.
            </Title>
            <div>
              <Button primery href="https://medium.com/@masterpool">
                ANNOUNCENT
              </Button>
              <Button>WHITE PAPER</Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </Nav>
  );
};

export default Header;
