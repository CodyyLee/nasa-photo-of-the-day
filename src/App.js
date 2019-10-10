import React from "react";
import "./css/index.css";

import Navigation from "./components/Navigation/Navigation";
import Heading from "./components/Header/Header";
import Photo from "./components/PhotoCard/Photo";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Heading />
      <Photo />
      <Footer />
    </div>
  );
}

export default App;
