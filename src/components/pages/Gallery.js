import '../../styles/Projects.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';
import ProjectYoutubeEmbedCard from '../ProjectYoutubeEmbedCard';

//TODO: This is super manual and jank, make a component that reads from a data file
export default function Gallery() {
    return (
        <div className="gallery">
            <h2>Gallery</h2>
            <hr/>
            <Row>
                <Col md={6}>
                    <ProjectImageCard src="/images/gallery/fog-water.png" title='Custom Fog and Ocean shaders with Speedtree foliage in Vege Studio Pro'/>
                    <ProjectVideoCard src="/videos/grass.mp4" title='Grass Geometry Shader, wind experiment'/>
                    <ProjectImageCard src="/images/gallery/render.png" title='Native New Zealand Fern'/>
                    <ProjectImageCard src="/images/gallery/fog.png" title='FOG + Compute shader Ocean'/>
                    <ProjectImageCard src="/images/gallery/speedtree.png" title='Speedtree'/>
                    <ProjectVideoCard src="/videos/mechcockpit.mp4" title='Mech Cockpit, cell shaded'/>
                </Col>
                <Col md={6}>
                    <ProjectVideoCard src="/videos/waves.mp4" title='Waves using Grestner formula and Compute Shaders'/>
                    <ProjectImageCard src="/images/gallery/computeexplosion.png" title='Compute Shader gone wrong'/>
                    <ProjectYoutubeEmbedCard src="BHNYBxIUqDQ" title='Voxel Sand and Stone'/>
                    <ProjectImageCard src="/images/gallery/render5.png" title='Native New Zealand Fern II'/>
                    <ProjectImageCard src="/images/gallery/Sexy9.PNG" title='MORE FOG'/>
                    <ProjectVideoCard src="/videos/robot.mp4" title='Cell Shaded Robot'/>
                </Col>
            </Row>
        </div>
    )
}
