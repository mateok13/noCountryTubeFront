import { useParams } from "react-router-dom"
import PlayVideo from "../../components/playVideo/PlayVideo"
import ListVideosPlayer from "../../components/listVideosPlayer/ListVideosPlayer"
import './WatchVideo.css'

const WatchVideo = () => {
    const { videoId } = useParams()

    return (
        <div className="contenidoWatchVideo">
            <div className="playVideo">
                <PlayVideo videoId={videoId} />
            </div>
            <div className="listAllVideosPlayer">
                <ListVideosPlayer videoId={videoId}/>
            </div>
        </div>
    )
}

export default WatchVideo