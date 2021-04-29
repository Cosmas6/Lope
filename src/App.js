import React from "react";
//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
import styled from "styled-components";
//Page Imports
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Designs from "./pages/Designs";
import ContactUs from "./pages/ContactUs";
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
//Designs Image Slider

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Navigation>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <div className="home">
                <Home />
              </div>
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/designs">
              <Designs />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
          </Switch>
        </Router>
      </Navigation>
    </div>
  );
}

const Navigation = styled.div``;

export default App;
