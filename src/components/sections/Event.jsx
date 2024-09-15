import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EventCard from '../cards/EventCard';

const Container = styled.div`
    display: flex;
    z-index: 1;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 0 16px;
    margin-top: 50px;
    align-items: center;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    max-width: 1100px;
    flex-direction: column;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    @media (max-width: 760px) {
        font-size: 32px;
        margin-top: 10px;
    }
    @media (max-width: 960px) {
        font-size: 42px;
    }
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const Event = () => {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);

     useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/prathamesh424/6679fbd960285e8bd12015a78130b76e/raw/HackathonClub.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setEvents(data.HackathonClub.events);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching JSON:', error);
            }
        };
        fetchEvents();
    }, []);

    if (error) {
        return <div>Error fetching events: {error}</div>;
    }

    return (
        <Container id="Events">
            <Wrapper>
                <Title>Events</Title>
                <CardContainer>
                    {events.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Event;
