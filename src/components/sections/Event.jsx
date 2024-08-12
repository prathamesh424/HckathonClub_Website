import React from 'react'
import styled from 'styled-components';
import EventCard from '../cards/EventCard';
 
const Container = styled.div`
    display: flex ;
    z-index: 1 ;
    flex-direction : column;
    justify-content : center ;
    position : relative ;
    padding : 0 16px;
    margin-top: 50px ;
    align-items: center ;   
`;

const Wrapper = styled.div`
    position : relative ;
    display : flex; 
    align-items: center ; 
    justify-content : space-between ;
    gap: 12px ;
    width: 100% ;
    gap: 12px ;
    max-width : 1100px ;
    flex-direction: column ;
    @media (max-width : 960px){
        flex-direction: column ;}
`;

const Title = styled.div`
    font-size: 52px ;
    text-align : center; 
    font-weight : 600 ;
    margin-top: 20px ;
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



const Event = () => {
    const event  = {
        image: "https://img.freepik.com/free-vector/hackathon-isometric-landing-software-development_107791-2942.jpg?semt=ais_hybrid" , 
        name: 'WebWizard`s', 
        date : '23-08-2024' ,
        link : true
    }
    const event1  = {
        image: "https://bkbiet.ac.in/wp-content/uploads/2020/01/banner_SIH2019_1.png" , 
        name: 'Smart India Hackathon', 
        date : '06-09-2024' ,
        link : false
    }

  return (
    <Container id="Events">
        <Wrapper>
            <Title>Events</Title>
            <CardContainer>
                <EventCard event={event}/>
                <EventCard event={event}/>
                <EventCard event={event}/>
                <EventCard event={event1}/>
                <EventCard event={event1}/>
                <EventCard event={event1}/>
            </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Event 
 