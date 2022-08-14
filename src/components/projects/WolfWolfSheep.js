import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectWebGLCard from '../ProjectWebGLCard';
import ItchDownload from '../ItchDownload';

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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/wolfwolfsheep/gameplay1.png"/>
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
