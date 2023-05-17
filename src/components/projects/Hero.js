import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';

export default function Hero() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>About</h2>
                                <p>Unfortunately I can't show too much as I don't have permission to show the inner workings of the web-app, screenshots are publicly available.</p>
                                <p>Hero is a school student management system in use in schools across NZ and AUS</p>
                                <p>We use EmberJS, Go and MongoDB. Working at Hero is quickly improving my fullstack skills. I am loving having a more balanced skill set outside of game development.</p>
                                <p>I encourage you to check out the <a href='https://our-hero.com/nz/' target='_blank'>company website</a>.</p>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/hero/hero2.png"/>
                            <Row>
                                <Col md={6}>
                                    <ProjectImageCard src="/images/hero/hero1.png"/>
                                </Col>

                                <Col md={6}>
                                    <ProjectImageCard src="/images/hero/hero3.png"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/hero/hero-card.png"/>

                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>EmberJS</li>
                            <li>Go</li>
                            <li>MongoDB</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}
