import styled from "styled-components";

type BlockProps = {
  flex: number;
};

export const Block = styled.div`
  flex: ${(props: BlockProps) => props.flex};
`;

export const Button = styled.button`
  display: inline-block;
  vertical-align: top;
  border: 4px solid ${(props) => props.color};
  border-radius: 4px;
  height: inherit;
  font-size: 18px;
  line-height: 1;
  font-weight: 600;
  color: #000;
  cursor: pointer;
  width: 80vw;
  max-width: 316px;
  background: white;

  :active {
    cursor: pointer;
    transition: 0.15s ease-in-out;
    background: ${(props) => props.color};
    color: white;
  }
`;

export const SinglePageContent = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  max-height: 700px;
  margin: auto;
`;

export const ScrollableContent = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 40vh;
  margin: auto;
`;

export const Container = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
`;

export const Content = styled.p`
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: justify;
  font-size: 15px;
  line-height: 22px;
  max-width: 316px;
  color: rgba(0, 0, 0, 0.6);
`;

export const ImgCard = styled.img`
  flex: 4;
  height: 1vh;
  max-width: 500px;
  max-height: 500px;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  margin: auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  flex: 0.6;
  margin: auto;
  text-align: center;
  display: flex;
  align-items: center;
`;