import { mainDesc, mainFont } from "../styles/GlobalStyled";
import styled from "styled-components";

const SMainBanner = styled.div`
  height: 80vh;
  background: ${(props) => props.bgUrl} no-repeat center / cover;
  padding: 400px 80px 0 80px;
  position: relative;
`;

const Title = styled.h3`
  font-size: 80px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 9;
`;

const Desc = styled.p`
  max-width: 700px;
  font-size: ${mainDesc.fontSize};
  font-weight: ${mainDesc.fontWeight};
  color: ${mainFont.fontColor};
  line-height: ${mainDesc.lineHeight};
  margin-top: 30px;
  text-shadow: 0, 0, 15px, rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 9;
`;

const BlackBox = styled.div`
  width: 100%;
  height: 80vh;
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(0deg, #1d1d1d, transparent);
`;

export const MainBanner = ({ data }) => {
  return (
    <SMainBanner
      bgUrl={`url(https://image.tmdb.org/t/p/original${data.backdrop_path})`}
    >
      <Title>{data.title}</Title>
      <Desc>{data.overview}</Desc>
      <BlackBox />
    </SMainBanner>
  );
};
