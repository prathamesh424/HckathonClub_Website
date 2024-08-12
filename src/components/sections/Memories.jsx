import React from 'react';
import styled, { keyframes } from 'styled-components';
import memo1 from '../cards/Screenshot_1-8-2024_12812_leetcode.com.jpeg';
import memo2 from '../cards/coverImage.webp'

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-10%);
  }
`;
const mobileSlide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;
const tabSlide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-70%);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  font-weight: 600;
  margin: 20px 0;
  @media (max-width: 960px) {
    font-size: 2rem;
  }
  @media (max-width: 760px) {
    font-size: 1.5rem;
  }
`;

const Desc = styled.p`
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  @media (max-width: 960px) {
    font-size: 0.9rem;
  }
  @media (max-width: 760px) {
    font-size: 0.8rem;
  }
`;

const MemoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
   
`;

const SlidingContainer = styled.div`
  display: flex;
  animation: ${slide} 15s linear infinite  ;
  width: calc(200% + 20px);  
  @media (max-width: 768px) {
    animation: ${mobileSlide} 15s linear infinite  ;
    width: 100%;
    max-width: 450px;
     gap: 10px;
  }
  @media (max-width: 500px) {
    width: 100%;
    max-width: 400px;
    gap: 7px;
  }
  @media (max-width: 1000px){
    animation: ${tabSlide} 15s linear infinite  ;
    gap: 15px;
  }
  @media (max-width: 1200px) {
    gap: 18px;
  }
    gap : 21px;
   
`;

const Effect = styled.div`
  flex: 0 0 auto;  
  width: 600px;
  max-width: 700px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 600px;
  }
  @media (max-width: 500px) {
    width: 100%;
    max-width: 400px;
    padding: 10px 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
`;

const Memories = () => {
  const effects = [
    <Effect key="1">
      <Image src={memo1} alt="Memory 1" />
    </Effect>,
    <Effect key="2">
      <Image src={memo2} alt="Memory 2" />
    </Effect>,
  ];

  return (
    <Container id="Memories">
      <Wrapper>
        <Title>Memories</Title>
        <Desc>We share some memories with you</Desc>
        <MemoryContainer>
          <SlidingContainer>
            {effects}
            {effects} {/* Duplicate images for seamless looping */}
          </SlidingContainer>
        </MemoryContainer>
      </Wrapper>
    </Container>
  );
};

export default Memories;
