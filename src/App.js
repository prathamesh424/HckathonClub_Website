import React, { useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Event from "./components/sections/Event";
import Team from "./components/sections/Team";
import './cursor.css';
import Memory from './components/sections/Memory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: white;
  width: 100%;
  height: 90vh;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 150px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const Div = styled.div`
  @media (max-width: 780px) {
    display: none;
  }
`;

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.getElementById('cursor');
      if (cursor) {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
      }
      const createParticle = (x, y) => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.top = `${y}px`;
        particle.style.left = `${x}px`;
        document.body.appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, 1000);
      };

      for (let i = 0; i < 5; i++) {
        createParticle(e.clientX + Math.random() * 20 - 10, e.clientY + Math.random() * 20 - 10);
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="cursor"></div>
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <div>
            <Wrapper>
              <About />
              <Event />
              <Memory />
              <Team />
              <Contact />
            </Wrapper>
          </div>
          <Footer />
          <Div>
            <Cursor />
          </Div>
        </Body>
        <ToastContainer 
          position="top-right" 
          autoClose={5000} 
          hideProgressBar={false} 
          newestOnTop={false} 
          closeOnClick 
          rtl={false} 
          pauseOnFocusLoss 
          draggable 
          pauseOnHover 
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
