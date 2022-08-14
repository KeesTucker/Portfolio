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
                            <ItchDownload src='1187259' download='https://soggykees.itch.io/stick-royale' title='Stick Royale by Kees Tucker' />
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
                            <ProjectImageCard src="/images/stickroyale/stick-royale-shop.png"  title='Shop'/>
                            <ProjectTextCard>
                                <h2>Learnings</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </ProjectTextCard>
                            <ProjectVideoCard src="/videos/stickgameplay1.mp4" type="video/mp4"/>
                        </Col>
                        <Col md={6}>
                            <ProjectTextCard>
                                <h2>Features</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </ProjectTextCard>
                            <ProjectVideoCard src="/videos/StickBrawlTrailerMulti.mp4" type="video/mp4" title='Android Trailer'/>
                        </Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/stickroyale/stick-royale-card.png" />

                    <ProjectTextCard>
                        <h2>Info</h2>
                        <ul>
                            <li>Studio: Triple Fin Games</li>
                            <li>Kees Tucker</li>
                            <li>Android Play Store</li>
                            <li>itch.io PC</li>
                        </ul>
                    </ProjectTextCard>

                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>.NET</li>
                            <li>Mirror</li>
                            <li>Procedural Animation</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}
