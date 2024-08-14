import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './memory.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import img1 from '../images/inoguration.jpeg'
import img6 from '../images/painting.jpg'
import img2 from '../images/interclghc.jpeg'
import img3 from '../images/DSAguide.jpeg'
import img4 from '../images/Faculty.jpeg'
import img5 from '../images/codecompitition.jpeg'
 



const Container = styled.div`
  max-width: 124rem;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: 6rem;
  text-align: center;
  font-weight: 800;
  margin: 20px 0;
  @media (max-width: 960px) {
    font-size: 5rem;
  }
  @media (max-width: 760px) {
    font-size: 4.5rem;
  }
`;
const Desc = styled.p`
  font-size: 1.8rem;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  @media (max-width: 960px) {
    font-size: 1.65rem;
  }
  @media (max-width: 760px) {
    font-size: 1.4rem;
  }
`;

const Effect = styled.div`
  flex: 0 0 auto;
   object-fit: cover;
  width: 100%;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  box-sizing: border-box ;
`;

const Image = styled.img`
  @media (max-width: 980px) {
   border-radius: 20px;
    padding : 22px ;
  }
  @media (max-width: 450px) {
   border-radius: 16px;
    padding : 12px ;
  }
  padding: 25px ;
  border-radius: 25px;
`;


function Memory() {
  return (
    <Container id="Memories">
      <Title>Memories</Title>
      <Desc>We share some memories with you</Desc>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}   
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <Effect>
            <Image src={ img1} alt="slide_image" />
          </Effect>
        </SwiperSlide>
        <SwiperSlide>
          <Effect>
            <Image src={img6} alt="slide_image" />
          </Effect>
        </SwiperSlide>
        <SwiperSlide>
          <Effect>
            <Image src={img2} alt="slide_image" />
          </Effect>
        </SwiperSlide>
        <SwiperSlide>
          <Effect>
            <Image src={img3} alt="slide_image" />
          </Effect>
        </SwiperSlide>
        <SwiperSlide>
          <Effect>
            <Image src={img4} alt="slide_image" />
          </Effect>
        </SwiperSlide>
        <SwiperSlide>
          <Effect>
            <Image src={img5} alt="slide_image" />
          </Effect>
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      
    </Container>
  );
}

export default Memory;
