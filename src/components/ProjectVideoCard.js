import '../styles/ProjectVideoCard.scss';

export default function ProjectVideoCard(props) {
    return (
        <div className="project-video-card">
            <video controls src={props.src} type={props.type} />
        </div>
    )
}
