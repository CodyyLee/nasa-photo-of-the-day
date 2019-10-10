import React from "react";
import "./css/index.css";
import styled from "styled-components";

import Navigation from "./components/Navigation/Navigation";
import Heading from "./components/Header/Header";
import Photo from "./components/PhotoCard/Photo";
import Footer from "./components/Footer/Footer";

const Background = styled.div`
  background-color: #333;
`;

function App() {
  return (
    <Background>
      <Navigation />
      <Heading />
      <Photo />
      <Footer />
    </Background>
  );
}

export default App;
