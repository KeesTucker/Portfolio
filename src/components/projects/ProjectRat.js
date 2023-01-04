import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectVideoCard from '../ProjectVideoCard';

export default function ProjectRat() {
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
                            <ProjectVideoCard src="/videos/roofrat.mp4" title="Rat Controller Demo I"/>
                            <ProjectVideoCard src="/videos/grapple_op.mp4" title="Rat Controller Demo II"/>
                            <ProjectVideoCard src="/videos/rat_tushy.mp4" title="Rat Controller Demo III"/>
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
                            <li>Procedural Animation and Physics</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}
