import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectWebGLCard from '../ProjectWebGLCard';
import ItchDownload from '../ItchDownload';
import ProjectYoutubeEmbedCard from '../ProjectYoutubeEmbedCard';

export default function WolfWolfSheep() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectWebGLCard url='https://itch.io/embed-upload/6326514?color=16181b'/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ItchDownload src='1540140' download='https://frozenwipstudios.itch.io/wolf-wolf-sheep' title='Wolf Wolf Sheep by Kees Tucker' />
                            <ProjectTextCard>
                                <h2>About</h2>
                                <p>This was my teams submission to Aoteroa Game Jam 2022!</p>
                                <p>Over the course of a weekend we developed an asymmetric multiplayer game similar to Among Us.</p>
                                <p>This game taught me how valuable proper scoping is, we scoped our game very small and we finished early and got time to add extra features!</p>
                                <p>We used photon for the networking and some synty assets for the environment. I used a naive boids implementation for the flocking sheep which helped make the sheeps movement somewhat realistic.</p>
                                <p>We had so much fun making this. Unfortunatley it was disqualified as we used Photon Networking, however, it game 1st equal in the voting.</p>
                            </ProjectTextCard>
                            <ProjectYoutubeEmbedCard src="jhzcG77WgVY"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <ProjectImageCard src="/images/wolfwolfsheep/gameplay2.png" title='SHEEP'/>
                            <ProjectImageCard src="/images/wolfwolfsheep/gameplay4.png" title='BLOOD'/>
                        </Col>
                        <Col md={6}>
                            <ProjectImageCard src="/images/wolfwolfsheep/gameplay3.png" title='WOLF'/>
                        </Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/wolfwolfsheep/wolf-wolf-sheep-card-transparent.png" />
                    <ProjectTextCard>
                        <h2>Team</h2>
                        <ul>
                            <li>Kees - Programmer</li>
                            <li>Ben - Programmer</li>
                            <li>Mike - Programmer</li>
                            <li>Renee - Artist</li>
                            <li>Kent - Artist</li>
                        </ul>
                    </ProjectTextCard>

                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>.NET</li>
                            <li>Photon</li>
                            <li>Boids</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}
