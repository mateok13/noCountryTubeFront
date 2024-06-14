import { useParams } from "react-router-dom"
import PlayVideo from "../../components/playVideo/PlayVideo"
import ListVideosPlayer from "../../components/listVideosPlayer/ListVideosPlayer"
import { useEffect } from "react"
import './WatchVideo.css'

const WatchVideo = () => {
    const { videoId } = useParams()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [videoId]);

    return (
        <div className="contenidoWatchVideo">
            <div className="playVideo">
                <PlayVideo videoId={videoId} />
            </div>
            <div className="listAllVideosPlayer">
                <ListVideosPlayer videoId={videoId} />
            </div>
        </div>
    )
}

export default WatchVideo