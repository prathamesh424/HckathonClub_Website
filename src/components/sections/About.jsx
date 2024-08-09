import React from 'react'
import styled from 'styled-components'
import Typewriter from "typewriter-effect"
import {Tilt} from "react-tilt" 
import {motion} from "framer-motion"
import {headContainerAnimation, headContentAnimation, headTextAnimation} from "../../utils/motion"
import logo from '../cards/Hackathon logo.png';

const MainContainer= styled.div`
  display: flex  ;
  justify-content: center ;
  position :relative ;
  padding : 80px 30px ;
  z-index : 1 ;
  @media (max-width :960px){
  padding : 66px 16px ;}
  gap: 6px ;
  @media (max-width :640px){
  padding : 32px 16px ;}

  clip-path: polygon(0 0 , 100% 0 , 100% 100% , 70% 95% , 0 100%);
`;
const InnerContainer= styled.div`
  gap : 40px  ;
  position: relative;
  display: flex;
  justify-content: space-between; 
  align-items:center;  
  width : 100% ;
  max-width : 100% ;
  
  @media (max-width: 960px){
    flex-direction: column ;
  }
`;
const  TextContainer= styled.div`
  width : 100% ;
  order: 1;
  @media (max-width: 960px){
    order: 2 ;
    margin-bottom: 30px ;
    display: flex ;
    flex-direction : column ;
    align-items: center ;
  }
`;

const Title = styled.div`
    font-weight: 700 ;
    font-size: 50px ;
    color: white;
    line-height : 68px ;
    @media(max-width: 960px){
        text-align: center;
      }
        
    @media(max-width: 960px){
        text-align: center;
        font-size: 40px ;
        line-wight: 48px;
        margin-bottom: 8px;

      }
`;

const TextLoop = styled.div`
    font-weight: 600 ;
    font-size: 32px ;
    color: white;
    line-height : 68px ;
    display: flex ;
    gap: 12px  ;
    @media(max-width: 960px){
        text-align: center;
      }
        
    @media(max-width: 960px){
        text-align: center;
        font-size: 22px ;
        line-wight: 48px;
        margin-bottom: 16px;

      }
`;
const Span = styled.div`
    cursor: pointer;
    color: red;
    align-items: center;
    content-align: center;

`;

const SubTitle = styled.div`
    font-size: 20px ;
    line-height : 32px ;
    margin-bottom: 42px ;
    color: ${({theme}) => theme.text_primary + 95}; 
     @media(max-width: 960px){
        text-align: center;
      }
    @media(max-width: 960px){
         font-size: 16px ;
        line-wight: 32px;
       }
 `;
 
const ImageContainer= styled.div`
  width : 100% ;
  order: 2 ;
  display: flex ;
  justify-content: end; 
  @media (max-width: 960px){
    order: 1 ;
    margin-bottom: 80px ;
    display: flex ;
    flex-direction : column ;
    align-items: center ;
    justify-content:center; 
  }

    @media (max-width: 640px){
        margin-bottom : 30px ;
    }
`;

// const Img = styled.img`
//   border-radius: 50% ;
//   width: 100% ;
//   height : 100% ;
//   max-width: 360px ;
//   border: 2px solid white;
//   @media (max-width: 640px) {
//         max-width : 280px ;
//         max-height : 280px ;
//     } 
// `;

const Background = styled.div`
  position: absolute ;
  display : flex ;
  top : 0 ;
  right : 0 ;
  bottom : 0 ;
  left : 0 ;
  width: 100% ;
  height : 100%; 
  max-width : 1360px ;
`;


const About = () => {
  return (
    <div id= 'About'>
        <MainContainer>
          <Background>
              {/* <HeroBgAnimation/> */}
          </Background>

          <motion.div  {...headContainerAnimation}>
            <InnerContainer>
              <TextContainer>
                <motion.div {...headTextAnimation}>
                    <Title >
                      Welcome to <br/>  
                      <div class="text-container">
                          <span> HACKATHON CLUB </span>
                            {/* <span>H</span>
                            <span>A</span>
                            <span>C</span>
                            <span>K</span>
                            <span>A</span>
                            <span>T</span>
                            <span>H</span>
                            <span>O</span>
                            <span></span> */}
                        </div>
                    </Title>
                    <TextLoop>
                      <Span>
                        <Typewriter  options={{
                          strings: [
                            "Code | Collaborate | Conquer",
                          ] ,
                          autoStart : true ,
                          loop: true ,
                        }}/>
                      </Span>
                    </TextLoop>
                  </motion.div>

                  <motion.div {...headContentAnimation} >
                   <SubTitle>
                        intro about sub topic 
                  </SubTitle>
                    </motion.div>                   
              </TextContainer>

              <ImageContainer>

              <div id="maskparent">
                  <img src={logo} id="mask" alt="Hackathon Club" />
              </div>
              {/* <motion.div {...headContentAnimation} >
                <Tilt>
                <Img src={} alt = "HAckathon club" />   
                </Tilt>
              </motion.div>  */}
              </ImageContainer>
            </InnerContainer>
          </motion.div>
        </MainContainer>

        <div>

        </div>
    </div>

                
  )
}

export default About
