import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';

export default function Docker() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectImageCard src="/images/docker/portainer.png"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Media Stack and Bitwarden</h2>
                                <p>I have spent a lot of time setting up a dockerized home media stack that runs on my home server. The stack contains the Arr suite along with a discord bot to sent requests to the Arr applications + lots more.</p>
                                <p>I also have a dockerized private bitwarden server running from the same server.</p>
                                <p>I have also written some python scripts that run in containers to help keep my music library organized and synced between Plex Amp and Spotify</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <ProjectImageCard src="/images/docker/bitwarden.png" title='Private Bitwarden Server'/>
                            <ProjectImageCard src="/images/docker/muso.png" title='Custom music organisation script: MUSO'/>
                            <ProjectImageCard src="/images/docker/spolex.png" title='Custom sync script to keep spotify and plex up to date and synced: SPOLEX'/>
                        </Col>
                        <Col md={6}>
                            <ProjectImageCard src="/images/docker/requesterr.png" title='Discord bot to send requests to the Arr suite.'/>
                            <ProjectImageCard src="/images/docker/tdarr-stack.png" title='Tdarr automatic transcoding stack to keep file size of videos down and remux.'/>
                            <ProjectImageCard src="/images/docker/transcode.png" title='Tdarr transcoding some files.'/>
                        </Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Docker</li>
                            <li>Python</li>
                            <li>Linux</li>
                            <li>Javascript</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}
