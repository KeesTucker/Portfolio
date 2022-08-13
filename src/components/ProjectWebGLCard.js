import '../styles/ProjectWebGLCard.scss';

export default function ProjectWebGLCard(props) {
    let aspectRatio = !props.aspectRatio ? '16 / 9' : props.aspectRatio

    return (
        <div className="project-web-gl-card" style={{aspectRatio: aspectRatio}}>
                <iframe frameBorder="0" title="Game Embed Card" src={props.url} allowFullScreen="" width="100%" height="100%"></iframe>
        </div>
    )
}
