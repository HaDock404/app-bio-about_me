import '../styles/video.css'
import Video_mp4 from '../assets/video2.mp4'

function Video() {
    return (
        <div className="video">
            <video src={Video_mp4} autoPlay loop muted></video>
        </div>
    )
}

export default Video