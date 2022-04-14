import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../api";
import { IMG_URL } from "../../contents";
import { Container } from "../Container";
import { Loading } from "../Loading";
import { PageTitle } from "../PageTitle";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 150px;
`;

const CoverImg = styled.div`
  width: 50%;
  height: 700px;
`;

const Content = styled.div`
  padding: 50px;
  width: 50%;
`;

const Title = styled.h3`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 50px;
  line-height: 5rem;
`;

const ReleaseData = styled.div`
  opacity: 0.9;
  font-size: 20px;
`;

const Genres = styled.ul`
  list-style: disc;
  margin: 30px 0;
  padding-left: 15px;
  li {
    line-height: 2rem;
  }
`;

const RunTime = styled.div`
  margin-bottom: 30px;
  opacity: 0.7;
`;

const OverView = styled.div`
  line-height: 2rem;
`;

export const Detail = () => {
  const { id } = useParams();
  // console.log(id);

  const navigate = useNavigate();

  const [detailData, setDetailData] = useState();

  const [loading, setLoading] = useState(true);

  const movieData = async () => {
    try {
      // console.log(await movieApi.detail(id));
      const { data: detailData } = await movieApi.detail(id);
      setDetailData(detailData);
      setLoading(false);
    } catch (error) {
      // console.log("에러", error);
      navigate("/*");
    }
  };
  useEffect(movieData, []);

  console.log(detailData);

  return (
    <>
      <PageTitle title={"Detail"} />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {detailData && (
            <Wrap>
              <CoverImg
                style={{
                  background: `url(${IMG_URL}${detailData.backdrop_path}) no-repeat center / cover`,
                }}
              />
              <Content>
                <Title>{detailData.title}</Title>
                <ReleaseData>{detailData.release_date}</ReleaseData>
                <Genres>
                  {detailData.genres.map((gen) => (
                    <li key={gen.id}>{gen.name}</li>
                  ))}
                </Genres>
                <RunTime>{detailData.runtime}</RunTime>
                <OverView>{detailData.overview}</OverView>
              </Content>
            </Wrap>
          )}
        </Container>
      )}
    </>
  );
};
