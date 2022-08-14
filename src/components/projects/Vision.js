import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';
import ProjectWebGLCard from '../ProjectWebGLCard';
import ItchDownload from '../ItchDownload';

export default function Vision() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectWebGLCard url='https://itch.io/embed-upload/6329246?color=16181b'/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ItchDownload src='1660089' download='https://soggykees.itch.io/space-fpsspaceflight' title='Space Game by Travers Cole and Kees Tucker' />
                            <ProjectTextCard>
                                <h2>About</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
