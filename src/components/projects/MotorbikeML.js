import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';
import ItchDownload from '../ItchDownload';

export default function MotorbikeML() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectVideoCard src="/videos/mlmotorbikes.mp4"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ItchDownload src='1187235' download='https://soggykees.itch.io/machine-learning-motorbike-riding' title='Birthday Gift by Kees Tucker' />
                            <ProjectTextCard>
                                <h2>About</h2>
                                <p>During Lockdown (Coronavirus pandemic) I was missing my motorbike so I decided to start a Motorbike physics sim, I started off with balance and used Machine Learning, this using the PPO algorithm. I also rigged up a character to ride the bike using Inverse Kinematics. The next steps are to model real-world engine performance, tire physics lock in my bike physics (wheelies etc).</p>
                                <p>I was having a few issues - the algorithm was hitting a plateau and couldn't improve further. After a few tweaks, including trying to streamline and make the movement more organic, I ended up with a very efficient brain but it was the opposite of organic (see below). It switches as fast as possible from max to min to balance, somewhat exploiting the system. Further work is required to get his nice and smooth.</p>
                            </ProjectTextCard>
                            <ProjectVideoCard src="/videos/mlmotorbike2.mp4"/>
                        </Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/mlmotorbike/ml-card.png" />
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
