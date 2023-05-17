import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';
import ItchDownload from "../ItchDownload";

export default function Pakuman() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    <Row>
                        <Col>
                            <ItchDownload src='2065886' download='https://minwater2.itch.io/gja2023' title='Pakuman by Kees Tucker' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ProjectVideoCard src="/videos/pakuman-gameplay.mp4" title='Pakuman Gameplay'/>
                            <ProjectTextCard>
                                <h2>About</h2>
                                <p>A new spin on an old classic!</p>

                                <p>Inspired by the beloved public domain 80s arcade game "Pachmon",
                                    this reboot has a tonne of new features including ray tracing, EDM,
                                    online scoreboard, realistic graphics, anatomically correct Polkman,
                                    obstacles to jump over, and new updated realistic water ripple on ghosts!</p>

                                <p>Now in 3D!</p>

                                <p>This game was created as an entry to the 2023 Aotearoa Game Jam by Group 13.</p>
                            </ProjectTextCard>
                            <Row>
                                <Col md={6}>
                                    <ProjectImageCard src="/images/pakuman/pakuman2.png"/>
                                </Col>
                                <Col md={6}>
                                    <ProjectImageCard src="/images/pakuman/pakuman1.png"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/pakuman/pakuman-card.png"/>
                    <ProjectTextCard>
                        <h2>Team</h2>
                        <ul>
                            <li>Kees - Programmer</li>
                            <li>Minsu - Programmer</li>
                            <li>Traverse - Programmer</li>
                            <li>Jashon - Programmer</li>
                            <li>Lauryn - 2D Art</li>
                        </ul>
                    </ProjectTextCard>

                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unreal</li>
                            <li>C++ and Blueprints</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}
