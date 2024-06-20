import PropTypes from "prop-types"
import VideoCardPlayer from "./VideoCardPlayer"
import { useState, useEffect, useCallback } from "react"
import axios from "axios"
import { environment } from "../../hooks/environment"
import './VideoCardPlayer.css'

function ListVideosPlayer({ videoId }) {
    const [listVideos, setListVideos] = useState([]);
    const [limit] = useState(9);

    const fetchVideos = useCallback(async (offset) => {
        try {
            const response = await axios.get(`${environment.url}videos`, {
                params: {
                    limit,
                    offset
                }
            });
            const filteredVideos = response.data.data.filter(item => item.id !== videoId);
            setListVideos(filteredVideos);
        } catch (error) {
            alert('Error al cargar los videos.');
            console.error(error.message);
        }
    }, [videoId, limit]);

    useEffect(() => {
        // const number = Math.floor(Math.random() * 10);
        fetchVideos(0);
    }, [videoId, fetchVideos]);

    return (
        <div>
            {listVideos.map((item) => (
                <VideoCardPlayer key={item.id} item={item}/>
            ))}
        </div>
    );
}

ListVideosPlayer.propTypes = {
    videoId: PropTypes.string.isRequired,
};

export default ListVideosPlayer;