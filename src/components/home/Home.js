import { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { movieApi } from "../../api";
import { Loading } from "../Loading";
import { PageTitle } from "../PageTitle";
import { MainBanner } from "./MainBanner";
import { mainTitle } from "../styles/GlobalStyled";

const Container = styled.div`
  padding: 0 80px;
`;

const MovieWrap = styled.div`
  margin-top: 100px;
`;

const Title = styled.h3`
  font-size: ${mainTitle.fontSize};
  font-weight: ${mainTitle.fontWeight};
  margin-bottom: 30px;
`;

const Img = styled.div`
  width: 100%;
  height: 200px;
`;

const MovieTitle = styled.h4`
  font-size: 18px;
  margin-top: 15px;
`;

//console.log(movieApi.nowPlaying());
// 1 => 먼저 api에서 불러올 내용 콘솔에 확인

export const Home = () => {
  // 2 useEffect를 사용해서 외부에 있는 데이터를 불러옴
  // => 사용하는 이유
  // 문서가 읽힐때 외부에서 불러오는 데이터가 읽히기 전에 문서가 다 읽히면서 오류가 생기지 않도록
  // async, await를 사용하여 불러오는 데이터가 불러와진 다음 문서가 순서대로 읽힐 수 있도록 해줌
  // (이것 말고도 useEffect를 사용하는 이유는 많음)

  // useEffect(() => {
  // 3 익명함수를 사용하여 api에 있는 데이터를 불러옴
  //   const movieData = async () => {
  //     const nowPlayData = await movieApi.nowPlaying();
  // 4 api에서 불러온 내용을 콘솔로 확인
  //     // const nowPlayDataResults = nowPlayData.data.results;
  // 5 nowPlaying 안의 data -> results까지 변수에 담아서 콘솔로 확인
  //     // console.log(nowPlayDataResults);
  //     console.log(nowPlayData);
  // 6 비구조할당으로 데이터를 불러오는게 호율적
  // (매번 변수를 만들어서 불러오는건 비효율적임)
  //     const {
  //       data: { results },
  // => data안의 results라는 의미임
  //     } = await movieApi.nowPlaying();
  //     console.log(results);
  //   };
  //   movieData();
  // => 항상 까먹지 않게 함수는 호출 필수
  // }, []);

  const [nowPlaying, setNowPlaying] = useState();
  const [popular, setPopular] = useState();
  const [upComing, setUpComing] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieData = async () => {
      const {
        data: { results: nowPlayingData },
      } = await movieApi.nowPlaying();
      // console.log(nowPlayingData);
      setNowPlaying(nowPlayingData);

      const {
        data: { results: popularData },
      } = await movieApi.popular();
      setPopular(popularData);

      const {
        data: { results: upComingData },
      } = await movieApi.upComing();
      setUpComing(upComingData);
      setLoading(false);
    };
    movieData();
  }, []);

  console.log("현재 상영 영화", nowPlaying);
  console.log("인기 영화", popular);
  console.log("개봉 예정 영화", upComing);

  return (
    <>
      <PageTitle title={"Home"} />
      {/* {nowPlaying ? <MainBanner data={nowPlaying[0]} /> : <Loading />} */}
      {loading ? (
        <Loading />
      ) : (
        nowPlaying && (
          <>
            <MainBanner data={nowPlaying[0]} />

            <Container>
              <MovieWrap>
                <Title>현재 상영 영화</Title>
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  // scrollbar={{
                  //   draggable: true,
                  //   dragSize: 200,
                  //   dragClass: "scrollbar",
                  // }}
                >
                  {nowPlaying.map((now) => (
                    <SwiperSlide key={now.id}>
                      <Img
                        style={{
                          background: `url(https://image.tmdb.org/t/p/w500${now.backdrop_path}) no-repeat center / cover`,
                        }}
                      />
                      <MovieTitle>{now.title}</MovieTitle>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </MovieWrap>
            </Container>
          </>
        )
      )}
    </>
  );
};
