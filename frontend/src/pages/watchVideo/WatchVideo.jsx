import { useParams } from "react-router-dom"
import PlayVideo from "../../components/playVideo/PlayVideo"
import ListsVideosPlayer from "../../components/playVideo/listsVideosPlayer"
import './WatchVideo.css'

const WatchVideo = () => {
    const { videoId } = useParams()

    return (
        <div className="contenidoWatchVideo">
            <div className="playVideo">
                <PlayVideo videoId={videoId} />
            </div>
            <div className="listAllVideosPlayer">
                <ListsVideosPlayer videoId={videoId}/>
            </div>
        </div>
    )
}

export default WatchVideo