import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ItchDownload from '../ItchDownload';

export default function Birthday() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectImageCard src="/images/birthday/gameplay1.png"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ItchDownload src='1187226' download='https://soggykees.itch.io/birthday-gift' title='Birthday Gift by Kees Tucker' />
                            <ProjectTextCard>
                                <h2>About</h2>
                                <p>Since I couldn't purchase a present because of the COVID-19 situation I decided to put together a quick game so my stepdad could play it on his Birthday. We put it up on the TV as a surprise. Each animal had a message for him from a loved one. I must say this was an awesome birthday present and I'm pretty proud of myself for pulling it off in 2 days!</p>
                                <p>I'm thinking of turning this into a configurable game where you can add your own names and quotes etc.</p>
                                <p>I used a couple of assets to create this in unity as I didn't have time to build everything from scratch.</p>
                                <p>The idea inspiration comes from @lucybrrt on twitter</p>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/birthday/gameplay3.png"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <ProjectImageCard src="/images/birthday/gameplay2.png"/>
                        </Col>
                        <Col md={6}>
                            <ProjectImageCard src="/images/birthday/gameplay4.png"/>
                        </Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/birthday/birthday-card.png" />
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>.NET</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}
