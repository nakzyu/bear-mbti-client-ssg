import React from "react";
import styled from "styled-components";
import { copyLinkToClipBoard } from "../utils/export";
import showAlert from "../utils/showAlert";

type Props = {
  typeImgSrc: string;
  hostUrl: string;
  resultUrl: string;
  title: string;
  subtitle: string;
};

export default function ShareButtons({
  hostUrl,
  resultUrl,
  typeImgSrc,
  title,
  subtitle,
}: Props) {
  const send = () => {
    if (typeof window !== "undefined") {
      window.Kakao.Link.sendDefault({
        objectType: "feed", // 메시지 형식 : 피드 타입
        content: {
          title,
          description: subtitle,
          imageUrl: typeImgSrc, // 메인으로 보여질 이미지 주소
          link: {
            webUrl: resultUrl,
            mobileWebUrl: resultUrl,
          },
        },
        buttons: [
          {
            title: "결과보기",
            link: {
              webUrl: resultUrl,
              mobileWebUrl: resultUrl,
            },
          },
        ],
      });
    }
  };

  return (
    <Buttons>
      <SVG
        onClick={() => {
          copyLinkToClipBoard();
          showAlert("클립보드에 복사 되었습니다.");
        }}
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        width="50px"
        height="50px"
        viewBox="-165 -165 800 800"
      >
        <g>
          <g>
            <path
              className="link"
              d="M453.323,39.655l-16.564-14.656C418.729,9.021,395.521,0.22,371.405,0.22c-28.223,0-55.118,12.079-73.791,33.143    L250.207,86.86c-6.105,6.876-9.164,15.722-8.608,24.901c0.557,9.166,4.642,17.576,11.518,23.673l4.438,3.94    c6.299,5.594,14.416,8.673,22.842,8.673l2.054-0.059c9.166-0.551,17.582-4.637,23.699-11.523l47.418-53.503    c8.342-9.416,24.169-10.362,33.601-2.026l16.558,14.688c4.748,4.203,7.57,10.021,7.955,16.384    c0.386,6.358-1.722,12.465-5.937,17.208L302.042,246.198c-6.982,7.887-19.377,10.164-28.734,5.342    c-14.577-7.519-33.58-3.93-44.392,8.256l-0.813,0.926c-7.573,8.518-10.727,19.838-8.674,31.104    c2.074,11.198,9.047,20.801,19.153,26.09c13.986,7.311,29.763,11.33,45.621,11.33h0.012c28.21,0,55.117-12.238,73.8-33.308    l103.691-117.046C497.746,138.226,494.004,75.731,453.323,39.655z"
            />
            <path
              className="link"
              d="M228.873,347.458c-13.669-12.103-36.426-10.743-48.574,2.938l-47.396,53.487c-8.342,9.412-24.159,10.387-33.58,2.043    l-16.576-14.705c-4.747-4.207-7.57-10.025-7.955-16.383c-0.387-6.348,1.722-12.453,5.935-17.196l103.692-116.974    c6.876-7.765,19.047-10.111,28.297-5.566c15.121,7.448,34.359,3.818,46.05-9.416c7.433-8.374,10.555-19.496,8.586-30.463    c-1.956-11.031-8.747-20.389-18.618-25.666c-14.201-7.604-30.274-11.624-46.466-11.624c-28.223,0-55.118,12.084-73.791,33.151    L24.772,308.038c-36.062,40.666-32.308,103.082,8.361,139.143l16.564,14.482c18.021,15.979,41.229,24.582,65.345,24.582    c0.011,0,0,0,0.011,0c28.223,0,55.129-11.889,73.812-32.957l47.388-53.379c6.116-6.887,9.176-15.691,8.618-24.819    c-0.533-9.068-4.736-17.694-11.538-23.706L228.873,347.458z"
            />
          </g>
        </g>
      </SVG>
      <Img src="/images/kakao.png" onClick={() => send()} />
    </Buttons>
  );
}

const Buttons = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
`;

const Img = styled.img`
  padding: 5px;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

const SVG = styled.svg`
  margin: 5px;
  cursor: pointer;
  background: #517fa6;
  border-radius: 5px;

  .link {
    fill: #ffffff;
    width: 50%;
    height: 50%;
  }
`;
