import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { mainTitle } from "../styles/GlobalStyled";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

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

export const Movies = ({ movieData, title }) => {
  return (
    <MovieWrap>
      <Title>{title}</Title>
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
        {movieData.map((now) => (
          <SwiperSlide key={now.id}>
            <Link to={`/detail/${now.id}`}>
              <Img
                style={{
                  background: `url(https://image.tmdb.org/t/p/w500${now.backdrop_path}) no-repeat center / cover`,
                }}
              />
              <MovieTitle>{now.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </MovieWrap>
  );
};
