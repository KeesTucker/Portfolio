import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

// Font awesome icons
import {library} from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

// Stand alone components
import Header from "./components/Header";

// Nav page components
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";

// Project components
import UntamedIsles from "./components/projects/UntamedIsles";
import StickRoyale from "./components/projects/StickRoyale";
import SoilSim from "./components/projects/SoilSim";
import WolfWolfSheep from "./components/projects/WolfWolfSheep";
import SpaceGame from "./components/projects/SpaceGame";
import GravityZen from "./components/projects/GravityZen";
import Vision from "./components/projects/Vision";
import MotorbikeML from "./components/projects/MotorbikeML";
import Birthday from "./components/projects/Birthday";
import Gallery from "./components/pages/Gallery";
import Amebois from "./components/projects/Amebois";
import ProjectRat from "./components/projects/ProjectRat";
import Building from "./components/projects/Building";
import Pakuman from "./components/projects/Pakuman";
import Hero from "./components/projects/Hero";

// Font awesome setup
const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon]);

library.add(...iconList);

export default function App() {
  return (
    <Router>
      <Container fluid className="main">

        {/* Adds page header to all pages */}
        <Header />

        <Container>
          <Row className="justify-content-center">
            {/* Registers route listeners */}
            <Switch>
              <Route path="/" exact component={() => <Projects />} />
              <Route path="/projects" exact component={() => <Projects />} />
              <Route path="/contact" exact component={() => <Contact />} />
              <Route path="/blog" exact component={() => <Blog />} />
              <Route path="/gallery" exact component={() => <Gallery />} />

              {/* Projects */}
              <Route path="/projects/soilsim" exact component={() => <SoilSim />} />
              <Route path="/projects/untamed" exact component={() => <UntamedIsles />} />
              <Route path="/projects/stickroyale" exact component={() => <StickRoyale />} />
              <Route path="/projects/wolfwolfsheep" exact component={() => <WolfWolfSheep />} />
              <Route path="/projects/spacegame" exact component={() => <SpaceGame />} />
              <Route path="/projects/gravityzen" exact component={() => <GravityZen />} />
              <Route path="/projects/vision" exact component={() => <Vision />} />
              <Route path="/projects/motorbikeml" exact component={() => <MotorbikeML />} />
              <Route path="/projects/birthday" exact component={() => <Birthday />} />
              <Route path="/projects/amebois" exact component={() => <Amebois />} />
              <Route path="/projects/projectrat" exact component={() => <ProjectRat />} />
              <Route path="/projects/building" exact component={() => <Building />} />
              <Route path="/projects/pakuman" exact component={() => <Pakuman />} />
              <Route path="/projects/hero" exact component={() => <Hero />} />
            </Switch>
          </Row>
        </Container>

      </Container>
    </Router>
  );
}
