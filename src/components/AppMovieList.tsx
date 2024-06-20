import { Navigation, Pagination } from "swiper/modules"
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AppMovie } from "./AppMovie";

export const AppMovieList = ({movies}) => {
  return (
    <div className="w-[1600px]">
      <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={5}
      navigation
      pagination={{clickable:true}}
      >
        {movies.map(({id,title,name,backdrop_path}) => (
          <SwiperSlide>
            <br />
            <AppMovie id={id} backdrop_path={backdrop_path} title={title ? title:name}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
