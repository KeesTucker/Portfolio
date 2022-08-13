import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

// Font awesome icons
import {library} from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

// Stand alone components
import Header from "./components/Header";

// Nav page components
import Games from "./components/pages/Games";

// Project components
import UntamedIsles from "./components/projects/UntamedIsles";
import StickRoyale from "./components/projects/StickRoyale";
import SoilSim from "./components/projects/SoilSim";
import WolfWolfSheep from "./components/projects/WolfWolfSheep";
import SpaceGame from "./components/projects/SpaceGame";

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
              <Route path="/" exact component={() => <Games />} />
              <Route path="/games" exact component={() => <Games />} />

              {/* Projects */}
              <Route path="/projects/soilsim" exact component={() => <SoilSim />} />
              <Route path="/projects/untamed" exact component={() => <UntamedIsles />} />
              <Route path="/projects/stickroyale" exact component={() => <StickRoyale />} />
              <Route path="/projects/wolfwolfsheep" exact component={() => <WolfWolfSheep />} />
              <Route path="/projects/spacegame" exact component={() => <SpaceGame />} />
            </Switch>
          </Row>
        </Container>

      </Container>
    </Router>
  );
}
