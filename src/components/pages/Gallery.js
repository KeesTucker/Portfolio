import '../../styles/Projects.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';
import ProjectYoutubeEmbedCard from '../ProjectYoutubeEmbedCard';

export default function Gallery() {
    return (
        <div className="gallery">
            <h2>Gallery</h2>
            <hr/>
            <Row>
                <Col md={6}>
                    <ProjectImageCard src="/images/gallery/fog-water.png" title='Custom Fog and Ocean shaders with Speedtree foliage in Vege Studio Pro'/>
                    <ProjectVideoCard src="/videos/grass.mp4" title='Grass Geometry Shader, wind experiment'/>
                    <ProjectYoutubeEmbedCard src="jqElvMoxdpQ" title='Crest + DWP2 Integration'/>
                    <ProjectImageCard src="/images/gallery/fog.png" title='FOG + Compute shader Ocean'/>
                    <ProjectImageCard src="/images/gallery/speedtree.png" title='Speedtree'/>
                    <ProjectImageCard src="/images/gallery/render.png" title='Native New Zealand Fern'/>
                    <ProjectVideoCard src="/videos/robot.mp4" title='Cell Shaded Robot'/>
                </Col>
                <Col md={6}>
                    <ProjectVideoCard src="/videos/waves.mp4" title='Waves using Grestner formula and Compute Shaders'/>
                    <ProjectImageCard src="/images/gallery/computeexplosion.png" title='Compute Shader gone wrong'/>
                    <ProjectYoutubeEmbedCard src="BHNYBxIUqDQ" title='Voxel Sand and Stone'/>
                    <ProjectImageCard src="/images/gallery/render5.png" title='Native New Zealand Fern II'/>
                    <ProjectImageCard src="/images/gallery/Sexy9.PNG" title='MORE FOG'/>
                    <ProjectYoutubeEmbedCard src="sKE2DEJN1o0" title='Gaia Realistic vs Custom Cell Shaded'/>
                </Col>
            </Row>
        </div>
    )
}
