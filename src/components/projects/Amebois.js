import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';

export default function Amebois() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    <Row>
                        <Col>
                            <ProjectVideoCard src="/videos/amebois.mp4" title='Amebois Gameplay'/>
                            <ProjectTextCard>
                                <h2>About</h2>
                                <p>This was my teams submission to an internal company game jam at Phat Loot!</p>
                                <p>Over the course of a couple days we developed a top down shooter with a twist.</p>
                                <p>You could only shoot 3 bullet before you had to retrive them. Bullets would fly back to the player and could damage enemies on their way back.</p>
                                <p>We tried to use this mechanic to force the player to approach engagements differently as some enemies could only be killed when bullets were being retrived etc.</p>
                                <p>This game felt a bit uninspired, I think this was due to the goal being very broad; "reversal". We also didn't spend enough time finding a unique idea/mechanic.</p>
                                <p>Download: <a href='https://sugoi-yellow.itch.io/amebois'>Click Here</a></p> 
                            </ProjectTextCard>
                        </Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/amebois/amebois-card.png"/>
                    <ProjectTextCard>
                        <h2>Team</h2>
                        <ul>
                            <li>Kees - Programmer</li>
                            <li>Minsu - Programmer</li>
                            <li>Traverse - Programmer</li>
                            <li>Jared - Design/Tech Art</li>
                            <li>Shan - Artist</li>
                        </ul>
                    </ProjectTextCard>

                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unreal</li>
                            <li>C++ and Blueprints</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}
