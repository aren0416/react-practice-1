import { useEffect, useState } from "react";
import { movieApi } from "../../api";
import { PageTitle } from "../PageTitle";

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

  useEffect(() => {
    const movieData = async () => {
      const {
        data: { results: nowPlayingData },
      } = await movieApi.nowPlaying();
      // console.log(nowPlayingData);
      setNowPlaying(nowPlayingData);
    };
    movieData();
  }, []);

  console.log(nowPlaying);

  return (
    <>
      <PageTitle title={"Home"} />
      <h1>Home</h1>
      {/* {nowPlaying && nowPlaying.map((play) => console.log(play.title))} */}
      {/* {nowPlaying
        ? nowPlaying.map((play) => console.log(play.title))
        : "loading..."} */}
    </>
  );
};
