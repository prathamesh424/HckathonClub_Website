import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './memory.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Container = styled.div`
  max-width: 124rem;
  margin: 0 auto;
  margin-top: 30px;
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

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  font-size: 1.5rem;
  @media (max-width: 980px) {
   border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
    padding : 22px ;
  }
  @media (max-width: 450px) {
   border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
    padding : 12px ;
  }
  padding: 25px ;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

function Memory() {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/prathamesh424/6679fbd960285e8bd12015a78130b76e/raw/HackathonClub.json') 
      .then((response) => response.json())
      .then((data) => {
        setMemories(data.HackathonClub.memories); 
      })
      .catch((error) => {
        console.error('Error fetching JSON:', error);
      });
  }, []);

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
        {memories.map((memory, index) => (
          <SwiperSlide key={index}>
            <Effect>
              <Image src={memory.image} alt={memory.alt} />
              <Caption>{memory.title}</Caption>
            </Effect>
          </SwiperSlide>
        ))}
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
