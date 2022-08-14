import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectWebGLCard from '../ProjectWebGLCard';
import ItchDownload from '../ItchDownload';

export default function SpaceGame() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectWebGLCard url='https://itch.io/embed-upload/6326164?color=16181b'/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ItchDownload src='1660089' download='https://soggykees.itch.io/space-fpsspaceflight' title='Space Game by Travers Cole and Kees Tucker' />
                            <ProjectTextCard>
                                <h2>About</h2>
                                <p>This was an after work project Travers and I put together for some fun.</p>
                                <p>It wasn't supposed to be a full game, we just had fun working on features we enjoyed.</p>
                                <p>I worked on realistic space flight movement, I now know why games don't have realistic space ships as they are extremely difficult to control.</p>
                                <p>This taught me a lot about how important a balance between realism and fun is.</p>
                                <p>Fully networked. Includes FPS elements thanks to Travers Cole.</p>
                                <p>We used synty studios assets to create the awesome scene.</p>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/space/cockpit.png"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <ProjectImageCard src="/images/space/pilot.png"/>
                            <ProjectImageCard src="/images/space/fps1.png"/>
                        </Col>
                        <Col md={6}>
                            <ProjectImageCard src="/images/space/fps.png"/>
                        </Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/space/cockpit.jpg" />
                    <ProjectTextCard>
                        <h2>Team</h2>
                        <ul>
                            <li>Travers Cole - Programmer</li>
                            <li>Kees - Programmer</li>
                        </ul>
                    </ProjectTextCard>

                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>.NET</li>
                            <li>Mirror</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}
