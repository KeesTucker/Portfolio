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
                                <p>Networked 2D physics-based rag-doll fighting game</p>
                                <p>This was a project I started in high school at 15, I was heavily inspired by Stick Fight: The Game (and actually talked with the developer about my project), but I wanted a Battle Royale format so I made a clone in Unity and implemented networking with Mirror.</p> 
                                <p>It was never really finished but I released it on the Google Play Store and on itch.io as an executable download.</p>
                                <p>This game built my foundational programming and development skills and without it I wouldn't be half the programmer I am now.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <ProjectImageCard src="/images/stickroyale/stick-royale-shop.png"  title='Shop'/>
                            <ProjectTextCard>
                                <h2>Learnings</h2>
                                <p>This project blew out insanley quickly due to poor planning and lack of good architecture.</p>
                                <p>Network optimization is hard! Networking 100 ragdolls in a battle royale setting was a huge challenge and forced me to optimize my networking.</p>
                                <p>Actually releasing a game is very different from making a protoype. To get this game from a playable state to something I could put on the app store took about the same amount of time as developing the core gameplay features.</p>
                            </ProjectTextCard>
                            <ProjectVideoCard src="/videos/stickgameplay1.mp4" type="video/mp4"/>
                        </Col>
                        <Col md={6}>
                            <ProjectTextCard>
                                <h2>Features</h2>
                                <ul>
                                    <li>Procedural Animation</li>
                                    <li>20 Players in a single battle royale game</li>
                                    <li>Fully networked guns, ragdolls, players</li>
                                    <li>Procedural game map</li>
                                    <li>Bot AI</li>
                                    <li>Mobile UI and store</li>
                                    <li>Movement mechanics such as grapples etc.</li>
                                    <li>Inventory System</li>
                                </ul>
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
