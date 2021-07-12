//IMPORTS
import React from "react";
import Nav from "./components/Nav";

//IMPORT PAGES
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetails from "./pages/MovieDetails";

//ANIMATION FRAMER MOTION ANIAMTION PRESENCE

//Router
import { Switch, Route, useLocation } from "react-router-dom";

// IMPORT GLOBALSTYLE
import GlobalStyle from "./components/GlobalStyle";
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";


function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="App">

      <ScrollTop/>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>

          <Route path="/work" exact>
            <OurWork />
          </Route>

          <Route path="/work/:id">
            <MovieDetails />
          </Route>

          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
