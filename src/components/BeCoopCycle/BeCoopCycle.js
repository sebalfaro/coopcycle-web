import { useState } from "react";
import Button from "../../../common/components/Button/Button";
import Card from "../../../common/components/Card/Card";
import { cardsInfo } from "../../../common/assets/data/cardsInfo"

import SwipperGallery from "../../../common/components/SwipperGallery/SwipperGallery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import theme from "../../../styles/theme";

export default function BeCoopCycle() {

  return (
    <>
      <section id="sumate" className="beCoopBox">
        <h1>¡Quiero ser Coopcycle!</h1>

        {/* <div className="cardsBox"> */}
          <SwipperGallery>
            {
                cardsInfo?.map(e => {
                  return (
                    <SwiperSlide key={e.title + "key" + 'swipperSlide'}>
                      <Card title={e.title} intro={e.intro} info={e.info} img={e.img} items={e.items} key={e.title + "key"} />
                    </SwiperSlide>
                  )
                })
            }
          </SwipperGallery>

        {/* </div> */}

        <h4>¡Si querés ser parte de Coopcycle,<br /> no dudes en comunicarte con nosotras/os!</h4>
        <Button text="¡Sumate!" type='center' />
      </section>
      <style jsx>
        {`
          .beCoopBox{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            h1{
              margin-top: 5rem;

              @media (max-width: ${theme.breakPoints.screenSm}) {
                font-size: 2.4rem;
              }
            }

            h4 {
              text-align: center;
              padding-bottom: 22px;
            }

            .cardsBox{
              width: 80%;
              overflow: hidden;
              @media (max-width: ${theme.breakPoints.screenSm}) {
                width: 100%;
              }

              .swiperBox{
                overflow:hidden;
              }
            }
          }
        `}
      </style>
    </>
  )
}