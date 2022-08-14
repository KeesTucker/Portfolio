import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';
import ItchDownload from '../ItchDownload';
import ProjectYoutubeEmbedCard from '../ProjectYoutubeEmbedCard';

export default function SoilSim() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col md={12}>
                            <ProjectYoutubeEmbedCard src="yNE658IFdYg"/>
                            <ItchDownload src="1187326" download='https://soggykees.itch.io/vr-soil-sim' title='Soil Sim by Kees Tucker' />
                            <ProjectTextCard>
                                <h2>About</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <ProjectVideoCard src="/videos/soil-overhang.mp4" type="video/mp4" title='Overhand Test' />
                            <ProjectTextCard>
                                <h2>Learnings</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/soilsim/colliders.png"  title='Colliders'/>
                        </Col>
                        <Col md={6}>
                            <ProjectTextCard>
                                <h2>Features</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/soilsim/colliders1.png"  title='Cube Sitting on Terrain'/>
                            <ProjectVideoCard src="/videos/soil-overhang-1.mp4" type="video/mp4" title='Spread' />
                        </Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/soilsim/soil-sim-card.png" />

                    <ProjectTextCard>
                        <h2>Info</h2>
                        <ul>
                            <li>University Project</li>
                            <li>Client: Evans Taylor Digital</li>
                            <li>Programming: Kees Tucker</li>
                            <li>Textures: Sophie Engel and Cara Kruger</li>
                            <li>Oculus Rift</li>
                            <li>itch.io PC</li>
                        </ul>
                    </ProjectTextCard>

                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>.NET</li>
                            <li>OpenXR</li>
                            <li>Compute Shaders</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}
