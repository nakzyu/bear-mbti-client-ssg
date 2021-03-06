import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";

import AutoTicker from "../../components/autoTicker";
import { SinglePageContent } from "../../styles/components";

const Loading: NextPage = () => {
  const history = useRouter();
  const { sports: sportQuery } = history.query;
  const [sports] = useState(sportQuery);

  useEffect(() => {
    const go = setTimeout(() => {
      history.replace(`/result/${sports}`);
    }, 3000);

    return () => {
      clearTimeout(go);
    };
  }, [history, sports]);

  return (
    <SinglePageContent>
      <PositioningDiv>
        <LoadingText>
          결과 분석 중<AutoTicker text={"..."} duration={500} />
        </LoadingText>
        <LoadingImg src="images/loading.png" />
      </PositioningDiv>
    </SinglePageContent>
  );
};

export default Loading;

const LoadingText = styled.h1`
  margin: 0;
  padding: 0;
  display: flex;
  font-size: 36px;
  font-weight: 700;
`;

const PositioningDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  justify-content: center;
  overflow: hidden;
`;

const LoadingImg = styled.img`
  z-index: -1;
  position: relative;
  max-width: 500px;
  max-height: 500px;
  animation-name: rotate;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
  overflow: hidden;

  @keyframes rotate {
    from {
      transform: rotate(-360deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
