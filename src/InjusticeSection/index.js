import React from "react";
import styled from "styled-components";
import background from "./backgroundGray.jpg";

const InjusticeSection = styled.section``;

const OpacityBg = styled.div`
  background-color: rgb(13, 28, 44, 0.6);
  padding: 20px 0 60px 0;
`;

const Header = styled.div`
  padding: 25px 0;
  background: #202d3c;
`;

const Title = styled.h2`
  font-family: "basis33";
  font-size: 40px;
  text-transform: uppercase;
  margin: 0;
`;

const WhatWeFix = styled.div`
  background: #202d3c;
  background-image: url(${background});
  background-position: center center;
  background-size: cover;
`;

const Text = styled.p`
  font-family: "basis33";
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  text-align: left;
  margin: 0;
  padding: ${props => (props.primery ? "0 0 0 35px" : "0")};
`;

const TextGroup = styled.div`
  margin: ${props => (props.primery ? "0 0 50px" : "0 0 70px")};
`;

const Subtitle = styled.h2`
  font-family: "basis33";
  margin: 0 0 40px 0;
  font-size: 30px;
  line-height: 23px;
  text-align: center;
`;

const YouTubeVideo = styled.iframe`
  border-width: 0 10px 0;
  border-left-color: white;
  border-right-color: #ffffff;
  border-radius: 5px;
  border-style: solid;
`;

const FooterText = styled.p`
  font-family: "basis33";
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
  text-align: left;
  margin: ${props => (props.primery ? "50px 0 0" : "0")};
`;

const Link = styled.a`
  text-decoration: none;
  font-family: "basis33";
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
`;

export default function() {
  return (
    <InjusticeSection>
      <Header className="center-xs">
        <Title>Problems and Solutions</Title>
      </Header>
      <WhatWeFix>
        <OpacityBg>
          <div className="container">
            <TextGroup>
              <Text>
                Problem1/ Inaccessibility for most people. The high cost of some
                masternode and PoS.
              </Text>
              <Text primery>
                Solution1/ Using our MPL token, you can rent from 1% of the
                masternode.
              </Text>
            </TextGroup>
            <TextGroup>
              <Text>
                Problem2/ Possession of technical capabilities. Masternode must
                be supported. PoS and masternode mining require a running
                server. After a power failure and the Internet, synchronization
                recovery will take time, and this is a financial loss.
              </Text>
              <Text primery>
                Solution2/ configuring servers, supporting and all the risks
                associated with this, are now our problem.
              </Text>
            </TextGroup>
            <TextGroup>
              <Text>
                Problem3/ The loss of liquidity Maternod and the devaluation of
                the extracted crypto-currency.
              </Text>
              <Text primery>
                Solution3/ You can simply switch the MPL tokens to another
                masternode. Risks on this site remain with us.
              </Text>
            </TextGroup>
            <TextGroup>
              <Text>
                Problem4/ It is necessary to analyze and search for the most
                liquid masternode and PoS coins. There are many different
                Maternods and it is difficult for an ordinary consumer to
                understand them.
              </Text>
              <Text primery>
                Solution4/ Our Masterpool includes only the best quality,
                promising and liquid Masternodes. Thanks to the voting system,
                we will take into account your wishes when choosing masternode
                and PoS.
              </Text>
            </TextGroup>
            <div className="center-xs">
              <Subtitle>
                Implemented with Mastepool token ERC 20 standard and smart
                contract for Ethereum.
              </Subtitle>
            </div>
            <YouTubeVideo
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rpbz5rpFWjY?rel=0"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
            <FooterText primery>
              Presale is close/{" "}
              <Link href="https://etherscan.io/">https://etherscan.io/</Link>
            </FooterText>
            <FooterText className="loading">
              Token sale is coming soon
            </FooterText>
          </div>
        </OpacityBg>
      </WhatWeFix>
    </InjusticeSection>
  );
}
