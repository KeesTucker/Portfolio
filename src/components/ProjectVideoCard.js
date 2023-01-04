import '../styles/ProjectVideoCard.scss';

export default function ProjectVideoCard(props) {
    return (
        <div className="project-video-card">
            <video controls src={props.src} type={props.type} muted={false} autoPlay={props.autoPlay} />
            {props.title ? <p style={{textAlign: "center", width: "100%"}}>{props.title}</p> : <></>}
        </div>
    )
}