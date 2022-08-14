import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';
import ProjectYoutubeEmbedCard from '../ProjectYoutubeEmbedCard';
import ItchDownload from '../ItchDownload';

export default function StickRoyale() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col md={12}>
                            <ProjectYoutubeEmbedCard src="hrdFKRtlHqs"/>
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
                            <ProjectImageCard src="/images/untamed/wildencounter.png"  title='Wild Tame Encounter'/>
                            <ProjectTextCard>
                                <h2>Features</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col md={6}>
                            <ProjectVideoCard src="/videos/untamedcombat.mp4" type="video/mp4"/>
                            <ProjectTextCard>
                                <h2>Learnings</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <ProjectImageCard src="/images/untamed/combatnpc.png" title='Combat'/>
                            <ProjectImageCard src="/images/untamed/genome.png" title='Tame Genome'/>
                        </Col>
                        <Col md={6}>
                            <ProjectImageCard src="/images/untamed/arenaplacement.png"  title='Arena Placement Algorithm'/>
                            <ProjectImageCard src="/images/untamed/validarenas.png"  title='Valid Arena Cells'/>
                        </Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/untamed/untamed-isles-card-transparent.png" />

                    <ItchDownload src='1187259' download='https://soggykees.itch.io/stick-royale' title='Stick Royale by Kees Tucker' />

                    <ProjectTextCard>
                        <h2>Studio</h2>
                        <ul>
                            <li>My Position: Network Programmer/Feature Lead</li>
                            <li>Phat Loot Studios</li>
                            <li>New Zealand</li>
                            <li>70 Employees</li>
                        </ul>
                    </ProjectTextCard>

                    <ProjectImageCard src="/images/untamed/phatlootlogo.png" />

                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>.NET</li>
                            <li>Mirror</li>
                            <li>Unity ECS</li>
                            <li>Firebase</li>
                        </ul>
                    </ProjectTextCard>
                </Col>

                <Col>
                    
                </Col>
            </Row>
        </div>
    )
}
