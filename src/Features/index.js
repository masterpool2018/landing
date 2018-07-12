import React from "react";
import styled from "styled-components";
import background from "./background.jpg";
import collective from "./collective.png";
import safe from "./safe.png";
import universal from "./universal.png";

const Features = styled.section`
  background: #202d3c;
  background-image: url(${background});
  background-position: center center;
  background-size: cover;
  padding: 128px 0 350px 0;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 36px 0;
`;

const Img = styled.img`
  width: 150px;
  margin: 0 auto;
`;

const Caption = styled.p`
  font-family: "GeometriaLight";
  font-size: 20px;
  color: #ffffff;
  text-transform: uppercase;
  margin: 40px 0 0;
  text-align: center;
`;

const Text = styled.p`
  font-family: "GeometriaLight";
  font-size: 20px;
  color: #ffffff;
  margin: 65px 0 0;
  text-align: center;
`;

const Line = styled.hr`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-style: solid;
  border-width: 1px;
  border-radius: 2px;
  width: 100%;
  border-color: #18daf7;
  box-shadow: 0 0 2em #18daf7;
  margin-top: 35px;
`;

export default function() {
  return (
    <Features>
      <div className="container">
        <div className="row">
          <Icon className="col-xs-4">
            <Img src={collective} />
            <Caption>COLLECTIVE POS AND MASTERNODES MAINING</Caption>
          </Icon>
          <Icon className="col-xs-4">
            <Img src={safe} />
            <Caption>SAFE MINING METHOD</Caption>
          </Icon>
          <Icon className="col-xs-4">
            <Img src={universal} />
            <Caption>UNIVERSAL TOKEN FOR MINING</Caption>
          </Icon>
        </div>
        <Text>
          Our mission to change the existing injustice and to give an
          opportunity to anyone who wants to become masternode owner is
          equivalent to his contribution. The masterpool token solves this
          practical problem honestly, privately and safely, without touching
          your property.
        </Text>
        <Line />
      </div>
    </Features>
  );
}
