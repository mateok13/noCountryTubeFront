import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PlayVideo from "../../components/playVideo/PlayVideo"
import VideoCard from "../../components/videoCard/VideoCard"
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import { environment } from "../../hooks/environment"
import './WatchVideo.css'

const WatchVideo = () => {
    const { videoId } = useParams()
    const [listVideos, setListVideos] = useState([]);
    const [limit] = useState(9);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const totalVideos = 24; // FALTA EL TOTAL DE VIDEOS

    const spinnerVideo = (
        <div className="d-flex justify-content-center align-items-center gap-2 px-10">
            <Spinner className="color-spinner"></Spinner>
        </div>
    )

    useEffect(() => {
        const fetchVideos = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${environment.url}videos`, {
                    params: {
                        limit,
                        offset
                    }
                });
                const filteredVideos = response.data.data.filter(item => item.id !== videoId);
                setListVideos([...listVideos, ...filteredVideos]);
                console.log(filteredVideos);
            } catch (error) {
                alert('Error al cargar los videos.');
                console.log(error.message)
            } finally {
                setIsLoading(false);
            }
        };

        fetchVideos();
    }, [offset, limit, videoId]);


    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
                if (offset + limit < totalVideos) {
                    setOffset(prevOffset => prevOffset + limit);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading, offset, limit, totalVideos]);

    return (
        <div className="contenidoWatchVideo">
            <div className="playVideo">
                <PlayVideo videoId={videoId} />
                <div className="contenidoComentarios">
                    aqui los comentarios
                </div>
            </div>
            <div className="listAllVideosPlayer">

                {
                    // isLoading && listVideos.length == 0 ? <Spinner className="color-spinner"></Spinner> :
                    listVideos.map((item) => (
                        <VideoCard key={item.id} item={item} />
                    ))
                }
                {(isLoading) && spinnerVideo}
            </div>
        </div>
    )
}

export default WatchVideo