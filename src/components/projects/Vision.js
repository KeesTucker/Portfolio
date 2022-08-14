import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectWebGLCard from '../ProjectWebGLCard';
import ItchDownload from '../ItchDownload';
import ProjectYoutubeEmbedCard from '../ProjectYoutubeEmbedCard';

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
                            <ItchDownload src='1187250' download='https://soggykees.itch.io/vision-platformer' title='Vision by Kees Tucker' />
                            <ProjectTextCard>
                                <h2>About</h2>
                                <p>A platformer where a 2D character interacts with a 3D world</p>
                                <p>This was a group project completed in a very short time for an assignment during University, it shows my innovative approach and outside-the-box thinking. My group members went AWOL and so this was a great test of my problem-solving skills and my ability to work under pressure.</p>
                                <p>The player can rotate the 3D world with their mouse and scroll wheel and then use the keyboard to move. This is a very strange experience as the character is locked to the screen space plane while the 3D world rotates around a fixed point.</p>
                                <p>In order to achieve this effect I had to recalculate 2D colliders based on the outline of the 3D objects in the scene every frame.</p>
                            </ProjectTextCard>
                            <ProjectYoutubeEmbedCard src='MJ3pyKQbhiE'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <ProjectImageCard src="/images/vision/gameplay1.png"/>
                            <ProjectImageCard src="/images/vision/gameplay2.png"/>
                        </Col>
                        <Col md={6}>
                            <ProjectImageCard src="/images/vision/gameplay3.png"/>
                            <ProjectImageCard src="/images/vision/gameplay4.png"/>
                        </Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/vision/vision-card.png" />
                    <ProjectTextCard>
                        <h2>Info</h2>
                        <ul>
                            <li>University Project</li>
                            <li>3D/2D Platformer</li>
                        </ul>
                    </ProjectTextCard>

                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>.NET</li>
                            <li>Triplanar Shaders</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}
