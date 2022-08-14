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
                                <p>256^3 Voxel Soil Sim running on the quest at almost full fps. Unfortunately, YouTube’s compression butchered the footage (switch to 1440p for a better look).</p>
                                <p>A vertical slice of an applied game running on the Quest</p>
                                <p>This is my contribution to a group client project for Evans Taylor Digital. It consists of a full voxel soil physics simulation running at a respectable framerate on the Oculus Quest’s measly GPU. It runs on the GPU using compute shaders and utilises a custom mesh generation algorithm (not marching cubes). The mesh generation is actually a hybrid of Dual Contouring and a custom technique I developed, It generates much fewer verts compared to marching cubes and allows for easy merging of vertices.</p>
                                <p>Base texture diffuse attributed to; Sophie Engel and Cara Kruger</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            
                            <ProjectImageCard src="/images/soilsim/colliders.png"  title='Colliders'/>
                            <ProjectVideoCard src="/videos/soil-overhang.mp4" type="video/mp4" title='Overhand Test' />
                            <ProjectImageCard src="/images/soilsim/colliders1.png"  title='Cube Sitting on Terrain'/>
                        </Col>
                        <Col md={6}>
                            <ProjectVideoCard src="/videos/soil-overhang-1.mp4" type="video/mp4" title='Spread' />
                            <ProjectTextCard>
                                <h2>Features</h2>
                                <ul>
                                    <li>The rendering technique is experimental and takes a lot of inspiration from Dual Contouring but uses a voxel density field instead of the derivative. </li>
                                    <li>It is NOT marching cubes.</li>
                                    <li>It produces much lower vert counts compared with marching cubes in exhange for slightly higher computational costs. </li>
                                    <li>It is also very good at rendering low resolution grids and making them appear smooth and rounded.</li>
                                    <li>It joins all verts and averages the normals in the same pass as all the other mesh generation.</li>
                                    <li>Mesh is dynamically sized so only the correct amount of triangles are rendered. This is accomplished with Append Buffers and DrawProceduralIndirect()</li>
                                    <li>Mesh is drawn using DrawProceduralIndirect() and no data is passed between CPU and GPU.</li>
                                    <li>There are two seperate shaders as DrawProceduralIndirectNow() renders the geometry and a seperate shader containing only a shadow pass is called in DrawProceduralIndirect().</li>
                                    <li>Colliders are generated from box colliders.</li>
                                </ul>
                            </ProjectTextCard>
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
                            <li>Burst and Jobs</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}
