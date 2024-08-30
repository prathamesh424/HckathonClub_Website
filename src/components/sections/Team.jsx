import React from 'react'
import styled from 'styled-components';
import TeamCard from '../cards/TeamCard';
import rg from '../images/Rahul.png';
import pg from '../images/prathamesh.png';
import ag from '../images/aditya.png' ; 
import sg from '../images/siddharth.png';
import shg from '../images/sushil.png'


const Container = styled.div`
    display: flex ;
    z-index: 1 ;
    flex-direction : column;
    justify-content : center ;
    position : relative ;
    padding : 0 16px;
    margin-top: 50px ;
    gap: 25px ;
    align-items: center ;   
`;

const Wrapper = styled.div`
    position : relative ;
    display : flex; 
    align-items: center ; 
    justify-content : space-between ;
    gap: 25px ;
    padding : 8px 16px;
    max-width : 100% ;
    flex-direction: column ;
`;

const Title = styled.div`
    font-size: 52px ;
    text-align : center; 
    font-weight : 600 ;
    margin-top: 20px ;
    margin-bottom: 20px ;
    @media (max-width : 760px){
        font-size: 32px ;
        margin-top: 10px ;}
    @media (max-width : 960px){
        font-size: 42px ;}
`;  
 
const CardContainer = styled.div`
    display: flex ;
    justify-content: center; 
    align-items:center;
    gap: 28px ;
    flex-wrap: wrap;
`;
const Team = () => {
    const leader  = {
        image: rg , 
        name: 'Rahul Gawade', 
        role : 'President', 
    }
    const member1  = {
        image: sg , 
        name: 'Siddharth Basale', 
        role : 'Vice President' 
        
    }
    const member2  = {
        image: ag , 
        name: 'Aditya Bhavar', 
        role : 'Technical Head' 
    }
    const member3  = {
        
        image: pg , 
        name: 'Prathamesh Gursal', 
        role : 'Management Head' 
    }
    const member4  = {
        image: shg , 
        name: 'Sushil Phadtare', 
        role : 'Socialmedia Head' 
    }

  return (
    <Container id="Team">
        <Title>Team</Title>
        <Wrapper>
            <CardContainer>
                <TeamCard member={leader}/>
            </CardContainer>
        </Wrapper>

        <Wrapper>
            <CardContainer>
                 <TeamCard member={member1}/>
                 <TeamCard member={member2}/>
                 <TeamCard member={member3}/>
                 <TeamCard member={member4}/>
            </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Team 
 