import { useParams } from "react-router-dom"
import PlayVideo from "../../components/playVideo/PlayVideo"
import ListVideosPlayer from "../../components/listVideosPlayer/ListVideosPlayer"
import { socket } from '../../socket'
import { useEffect, useState } from "react"
import './WatchVideo.css'

const WatchVideo = () => {
    const { videoId } = useParams()
    const [ refresh, setRefresh ] = useState({})

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [videoId]);

    useEffect(() => {
        function onConnect() {
            console.log("conectado")
        }

        function onDisconnect() {
            console.log("desconectado")
        }

        function onFooEvent(value) {
            setRefresh({...value})
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on(videoId, onFooEvent);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off(videoId, onFooEvent);
        };
    }, []);

    return (
        <div className="contenidoWatchVideo">
            <div className="playVideo">
                <PlayVideo videoId={videoId} refresh={refresh} />
            </div>
            <div className="listAllVideosPlayer">
                <ListVideosPlayer videoId={videoId} />
            </div>
        </div>
    )
}

export default WatchVideo