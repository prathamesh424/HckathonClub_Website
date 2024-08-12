import React from 'react'
import styled from 'styled-components'
import bg from '../cards/pg.png' ;
 
const Card = styled.div`
  width: 270px;
  height: 335px;
 
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 25px;
  box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color:inherit;
    filter: brightness(1.1);
    box-shadow: 0 0 25px 3px rgb(255, 217, 0);
  }
`;
const Image = styled.img`
  width: 180px;
  transform: scale(1);
  &:hover {
     transform: translateY(-10px) scale(1.3);
     filter: drop-shadow(0 0 30px #0652DD);
  } 
`;
const Details = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0px 2px;
  transform: scale(1);
`;
const Name = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  display: -webkit-box;
  max-width: 100%;
  overflow: hidden;
  padding: 2px ;
`;

const Role = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: red ;
`;

const TeamCard = ({member}) => {
  return (
    <Card>
        <Image src={bg}/>
        <Details>
            <Role>{member.role}</Role>
            <Name>{member.name}</Name>
        </Details>  
    </Card>
  )
}

export default TeamCard