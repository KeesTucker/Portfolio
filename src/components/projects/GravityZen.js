import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectWebGLCard from '../ProjectWebGLCard';
import ItchDownload from '../ItchDownload';

export default function GravityZen() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectWebGLCard url='https://itch.io/embed-upload/6329146?color=16181b'/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <ItchDownload src='1187316' download='https://soggykees.itch.io/gravity-zen' title='Gravity: Zen by Kees Tucker' />
                            <ProjectTextCard>
                                <h2>About</h2>
                                <p>Gravity is a 2D top-down mobile puzzle game where you need to fling your rocket around planets to hit the sun. Uses realistic gravity physics. Predicts trajectory using gravity formula and iterates through future positions. Runs at 60fps on a modern phone. Currently, live on Google Play</p>
                                <p>This was my first properly polished mobile game, I tried to base everything around a single mechanic and simplified gameplay down to it's essence. Slowly introducing new obstacles as the player progreses.</p>
                                <p>I monetized this game and quickly learnt I do not enjoy monitzation and would rather leave that to someone else. For this reason most of the games I made after this were designed without any sort of monetization.</p>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/gravity/lv2.png"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <ProjectImageCard src="/images/gravity/lv12.webp"/>
                            <ProjectImageCard src="/images/gravity/store.webp"/>
                        </Col>
                        <Col md={6}>
                            <ProjectImageCard src="/images/gravity/lv19.webp"/>
                            <ProjectImageCard src="/images/gravity/lv18.webp"/>
                            <ProjectImageCard src="/images/gravity/lv30.webp"/>
                        </Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/gravity/gravity-card.png" />
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
