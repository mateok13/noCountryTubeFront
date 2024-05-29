import { useParams } from "react-router-dom"

const WatchVideo = () => {
    const { videoId } = useParams()
    return (
        <div>
            <h1 className="text-center">WatchVideo id: {videoId}</h1>
        </div>
    )
}

export default WatchVideo