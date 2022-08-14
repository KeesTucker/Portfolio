import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';

export default function UntamedIsles() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>
                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col md={12}>
                            <ProjectVideoCard src="/videos/untamedtrailer.mp4" type="video/mp4"/>
                            <ProjectTextCard>
                                <h2>About</h2>
                                <p>Working on a big MMO startup was a wild experience.</p>
                                <p>I went from a University student to acting as a lead for small teams within a year.</p>
                                <p>I learnt an incredible amount during this time. Phat Loot gave me a huge appreciation for people and culture, two things I will be looking for in future jobs.</p>
                                <p>My technical skills were put to the test and with the help of my coworkers my programming skills flourished.</p>
                                <p>I gained a new appreciation for architecture, readibility, expandibility, modularity and many other programming concepts.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <ProjectTextCard>
                                <h2>Responsibilities</h2>
                                <p>Onboarding: I helped onboard some of the new hires, this was a highlight for me and I took a lot of pride in making sure they had a good introduction to the company.</p>
                                <p>Delegation: I took many of the bugs found by QA and delegated these out to the developers closest to these features.</p>
                                <p>Tooling: I created and documented many tools for the designers, level designers and other programmers.</p>
                                <p>Code Quality: I handled many merge requests and passed on my knowledge wherever possible.</p>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/untamed/wildencounter.png"  title='Wild Tame Encounter'/>
                        </Col>
                        <Col md={6}>
                            <ProjectVideoCard src="/videos/untamedcombat.mp4" type="video/mp4"/>
                            <ProjectTextCard>
                                <h2>Learnings</h2>
                                <p>Untamed taught me "just because something works doesn't mean it is ready for production", working on an MMO of this scale I quickly learnt the importance of good architecture and planning.</p>
                                <p>Working between departments is extremely important and communication should always be flowing.</p>
                                <p>Communication is key to success, we suffered a lot of failures due to lack of communication. Half of my job as a programmer was communicating with the rest of the team.</p>
                                <p>Peer programming is one of my favourite ways to develop and is very valuable.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <ProjectTextCard>
                                <h2>My Features</h2>
                                <ul>
                                    <li>Networked real time turn based combat system. This was a really tough challenge as it wasn’t instanced, the battles were in the game world and had to be networked to all the other players in vis range</li>
                                    <li>Tame/Monster Procedural Generation using Unity Jobs (Multithreading)</li>
                                    <li>Live balancing system so the team could update game-play variables and balance combat on the fly</li>
                                    <li>Region and Biome detection/tooling. Used by level designers to set the difficulty of areas. Biome data is fed into the Tame Generation and influences the procedural generation algorithm</li>
                                    <li>Leveling, exp, stat point systems</li>
                                    <li>Weather system</li>
                                    <li>Professions system</li>
                                    <li>And many more</li>
                                </ul>
                            </ProjectTextCard>
                            <ProjectImageCard src="/images/untamed/combatnpc.png" title='Combat'/>
                            <ProjectImageCard src="/images/untamed/genome.png" title='Tame Genome'/>
                        </Col>
                        <Col md={6}>
                            <ProjectImageCard src="/images/untamed/arenaplacement.png"  title='Arena Placement Algorithm'/>
                            <ProjectImageCard src="/images/untamed/validarenas.png"  title='Valid Arena Cells'/>
                        </Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>
                    <ProjectImageCard src="/images/untamed/untamed-isles-card-transparent.png" />

                    <ProjectTextCard>
                        <h2>Studio</h2>
                        <ul>
                            <li>My Position: Network Programmer/Feature Lead</li>
                            <li>Phat Loot Studios</li>
                            <li>New Zealand</li>
                            <li>70 Employees</li>
                        </ul>
                    </ProjectTextCard>

                    <ProjectImageCard src="/images/untamed/phatlootlogo.png" />

                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>.NET</li>
                            <li>Mirror</li>
                            <li>Unity ECS</li>
                            <li>Firebase</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}
