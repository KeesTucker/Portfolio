import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectVideoCard from '../ProjectVideoCard';

export default function Building() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <p>Under construction! I'm probably busy making other cool stuff!</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ProjectVideoCard src="/videos/building.mp4" title="Build System Prototype"/>
                        </Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>Multiplayer, Water Physics, Build System</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}
