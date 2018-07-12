import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Text = styled.span`
  font-family: "HelveticaBold";
  margin: 7px 0 40px 0;
  font-size: 23px;
  white-space: nowrap;
  text-transform: uppercase;
`;

const Svg = styled.svg`
  width: 50px;
  height: 40px;
  position: relative;
  top: -10px;
`;

const Path = styled.path`
  stroke-dasharray: 99.47578430175781;
  stroke-dashoffset: -99.47578430175781;
  fill: transparent;
  width: 100px;
  height: 100px;
`;

class CheckMark extends Component {
  render() {
    return (
      <Wrapper>
        <Svg className="animate"  viewbox="0 0 40 50" xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M 18 32.34 l -8.34 -8.34 -2.83 2.83 11.17 11.17 24 -24 -2.83 -2.83 z"
            stroke="#18daf7"
            fill="transparent"
          />
        </Svg>
        <Text>thank you for subscribing!</Text>
      </Wrapper>
    );
  }
}

export default CheckMark;
