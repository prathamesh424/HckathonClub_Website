import React from 'react'
import styled from 'styled-components'
 
const Card = styled.div`
  width: 330px;
  height: 330px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
     box-shadow: 0 0 25px 3px #0652DD;
    filter: brightness(1.1);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0px 2px;
`;
const Name = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  text-overflow: ellipsis;
`;
 
const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  font-size : 25px ;
  text-align: center;
`;
const Date = styled.div`
  margin-left: 7px;
  font-family: sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.text_secondary + 97};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Span = styled.span`
    font-size: 18px;
    font-weight: 500;
`;

const Text = styled.div`
  font-size: 22px; 
   color: ${({ theme }) => theme.primary};
`
const Complete = styled.div`
  font-size: 22px; 
   color: green;
`


const EventCard = ({event}) => {
  return (
    <Card>
        <Image src={event.image}/>
        <Details>
              <Name > 
                  <div className="event-container">
                    <Span>{event.name}</Span>
                  </div>
              </Name>
            <Date>{event.date}</Date>
        </Details>
         { event.link ? 
              <Button href={event.link} target="_blank">
                  Apply
              </Button> :
             ( event.status ? 
               <Complete >
                  {event.status}
               </Complete> :
               <Text>
                  Comming Soon...
               </Text>)
         }
        
    </Card>
  )
}

export default EventCard
