import { useParams } from "react-router-dom"
import PlayVideo from "../../components/playVideo/PlayVideo"
import './WatchVideo.css'

const WatchVideo = () => {
    const { videoId } = useParams()
    return (
        <div className="contenidoWatchVideo">
            <PlayVideo videoId={parseInt(videoId)}/>
        </div>
    )
}

export default WatchVideo