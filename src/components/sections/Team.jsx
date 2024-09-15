import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TeamCard from '../cards/TeamCard';

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
    const [teamData, setTeamData] = useState(null);

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/prathamesh424/6679fbd960285e8bd12015a78130b76e/raw/HackathonClub.json') 
        .then((response) => response.json())
        .then((data) => {
            setTeamData(data.HackathonClub.team); 
        })
        .catch((error) => {
            console.error('Error fetching JSON:', error);
        });
    }, []);

    if (!teamData) {
        return <div>Loading...</div>; 
    }

    return (
        <Container id="Team">
            <Title>Team</Title>
            <Wrapper>
                <CardContainer>
                    <TeamCard member={teamData.leader} />
                </CardContainer>
            </Wrapper>

            <Wrapper>
                <CardContainer>
                    {teamData.members.map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    );
}

export default Team;
