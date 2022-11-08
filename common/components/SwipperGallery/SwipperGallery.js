import theme from '../../../styles/theme';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, A11y, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/a11y';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import "swiper/css/free-mode";

const SwipperGallery = ({ children, loop = true, speed = 2000, layout, h100w100 = false, overlay = false }) => {
  return (
    <>
      <div className={"carouselBox "}>
        <Swiper
          a11y={true}
          spaceBetween={0}
          slidesPerView={1}
          /*onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}*/
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, A11y]}
          breakpoints={{
            640: {
              slidesPerView: 1.1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 32,
            },
            1224: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="mySwiper"
          // breakpoints={{
          //   640: {
          //     slidesPerView: 2,
          //     spaceBetween: 20,
          //   },
          //   768: {
          //     slidesPerView: 4,
          //     spaceBetween: 40,
          //   },
          //   1024: {
          //     slidesPerView: 5,
          //     spaceBetween: 50,
          //   },
          // }}
        >
          {children}
        </Swiper>

      </div>
      <style jsx global>{`
        .carouselBox{
          width: 80%;

          .swiper {
            width: 100%;
            height: 100%;
            
          }
          .swiper-slide{
            display: block;
            padding: 2rem ;
            width: 100%;
            height: 100%;
            object-fit: cover;
            
          }
        }
      `}</style>

    </>
  );
};

export default SwipperGallery;