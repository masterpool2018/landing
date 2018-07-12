import React from "react";
import styled from "styled-components";
import Mail from "./Mail";

const Footer = styled.footer`
  background: #0d1c2c;
  padding: 50px 0 90px 0;
`;

const Title = styled.h2`
  font-family: "GeometriaLight";
  margin: 0 0 40px 0;
  font-size: 40px;
  text-transform: uppercase;
`;

const Link = styled.a`
  position: relative;
  display: block;
  margin: 0 58px 20px;
  cursor: pointer;
  z-index: 1;

  & .svgHvr:hover {
    fill: #18daf7;
    transform: scale(1.3);
    transition: 200ms;
    transition-timing-function: ease-in-out;
  }
`;

const Social = styled.div`
  margin-bottom: 70px;
`;

export default () => {
  return (
    <Footer>
      <div className="container">
        <div className="row center-xs">
          <Social>
            <Title className="center-xs">Social</Title>
            <div className="row center-xs">
              <Link href="https://www.facebook.com/Masterpool.io/">
                <svg
                  version="1.1"
                  className="svgHvr"
                  id="facebook"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  width="80px"
                  height="80px"
                  fill="#263342"
                >
                  <path
                    d="M448,0H64C28.7,0,0,28.7,0,64v384c0,35.3,28.7,64,64,64h192V336h-64v-80h64v-64c0-53,43-96,96-96h64v80h-32
			c-17.7,0-32-1.7-32,16v64h80l-32,80h-48v176h96c35.3,0,64-28.7,64-64V64C512,28.7,483.3,0,448,0z"
                  />
                </svg>
              </Link>

              <Link href="https://t.me/masterpool">
                <svg
                  version="1.1"
                  id="Layer_1"
                  className="svgHvr"
                  fill="#263342"
                  width="80px"
                  height="80px"
                  x="0px"
                  y="0px"
                  viewBox="0 0 300 300"
                >
                  <path
                    id="XMLID_497_"
                    d="M5.3,144.6l69.1,25.8l26.8,86c1.7,5.5,8.5,7.5,12.9,3.9l38.5-31.4c4-3.3,9.8-3.5,14-0.4
		l69.5,50.5c4.8,3.5,11.6,0.9,12.8-4.9l50.9-244.9c1.3-6.3-4.9-11.6-10.9-9.3L5.2,129.4C-1.8,132.1-1.7,142,5.3,144.6z M96.9,156.7
		L232,73.5c2.4-1.5,4.9,1.8,2.8,3.7L123.3,180.9c-3.9,3.6-6.4,8.5-7.2,13.8l-3.8,28.1c-0.5,3.8-5.8,4.1-6.8,0.5L90.9,172
		C89.3,166.2,91.7,159.9,96.9,156.7z"
                  />
                </svg>
              </Link>

              <Link href="https://twitter.com/Masterpool_io">
                <svg
                  version="1.1"
                  className="svgHvr"
                  fill="#263342"
                  width="80px"
                  height="80px"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M512,97.2c-19,8.4-39.3,13.9-60.5,16.6c21.8-13,38.4-33.4,46.2-58c-20.3,12.1-42.7,20.6-66.6,25.4
			C411.9,60.7,384.4,48,354.5,48c-58.1,0-104.9,47.2-104.9,105c0,8.3,0.7,16.3,2.4,23.9c-87.3-4.3-164.5-46.1-216.4-109.8
			c-9.1,15.7-14.4,33.7-14.4,53.1c0,36.4,18.7,68.6,46.6,87.2c-16.9-0.3-33.4-5.2-47.4-12.9c0,0.3,0,0.7,0,1.2
			c0,51,36.4,93.4,84.1,103.1c-8.5,2.3-17.9,3.5-27.5,3.5c-6.7,0-13.5-0.4-19.9-1.8c13.6,41.6,52.2,72.1,98.1,73.1
			c-35.7,27.9-81.1,44.8-130.1,44.8c-8.6,0-16.9-0.4-25.1-1.4c46.5,30,101.6,47.1,161,47.1c193.2,0,298.8-160,298.8-298.7
			c0-4.6-0.2-9.1-0.4-13.6C480.2,137,497.7,118.5,512,97.2z"
                  />
                </svg>
              </Link>

              <Link href="https://github.com/masterpool2018/masterpool">
                <svg
                  version="1.1"
                  className="svgHvr"
                  fill="#263342"
                  width="80px"
                  height="80px"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M256,5.3C114.6,5.3,0,120.4,0,262.4c0,113.5,73.3,209.9,175.1,243.9c12.8,2.4,17.5-5.6,17.5-12.4
			c0-6.1-0.2-22.3-0.4-43.7C121,465.6,106,415.7,106,415.7c-11.6-29.7-28.4-37.6-28.4-37.6c-23.3-15.9,1.7-15.6,1.7-15.6
			c25.7,1.8,39.2,26.5,39.2,26.5c22.8,39.3,59.9,27.9,74.5,21.3c2.3-16.6,8.9-27.9,16.3-34.4c-56.8-6.5-116.6-28.5-116.6-127
			c0-28.1,10-51,26.4-69c-2.7-6.5-11.4-32.6,2.5-68c0,0,21.5-6.9,70.4,26.3c20.4-5.7,42.3-8.5,64.1-8.6c21.7,0.1,43.6,2.9,64.1,8.7
			C369,105,390.5,112,390.5,112c14,35.4,5.2,61.5,2.6,68c16.4,18,26.3,40.9,26.3,69c0,98.7-59.8,120.4-116.9,126.8
			c9.2,7.9,17.4,23.6,17.4,47.6c0,34.4-0.3,62.1-0.3,70.5c0,6.9,4.6,14.9,17.6,12.4C438.7,472.1,512,375.9,512,262.4
			C512,120.4,397.4,5.3,256,5.3z"
                  />
                </svg>
              </Link>
            </div>
          </Social>
        </div>
        <Mail />
      </div>
    </Footer>
  );
};
