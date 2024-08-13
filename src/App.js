import styled, { ThemeProvider } from "styled-components" ;
import {darkTheme} from "./utils/Themes" ;
import { BrowserRouter} from "react-router-dom";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";
import Memories from "./components/sections/Memories";
import About from "./components/sections/About"; 
import Contact from "./components/sections/Contact";
import Event from "./components/sections/Event";
import Team from "./components/sections/Team"; 

const Body = styled.div`
    background-color: ${({theme}) => theme.bg};
    color: white;
    width: 100% ;
    height: 90vh ;
    overflow-x : hidden ;
    position: relative ;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
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

function App() {
  return (
    <ThemeProvider theme={darkTheme}>  
        <BrowserRouter>
          <Navbar/>
          <Body>
              <div>
                <Wrapper>
                    <About/>
                    <Event />
                    <Memories/>
                    <Team/>
                    <Contact/>
                </Wrapper>
              </div>
              <Footer/>
          </Body> 
        </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;
