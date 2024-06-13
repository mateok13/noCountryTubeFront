import PropTypes from "prop-types"
import VideoCard from "../videoCard/VideoCard"
import { useState, useEffect } from "react"
import axios from "axios";
import { environment } from "../../hooks/environment"

function ListsVideosPlayer({ videoId }) {

    const [listVideos, setListVideos] = useState([]);
    const [limit] = useState(9);
    const [offset] = useState(0);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(`${environment.url}videos`, {
                    params: {
                        limit,
                        offset
                    }
                });
                const filteredVideos = response.data.data.filter(item => item.id !== videoId);
                setListVideos(filteredVideos);
                console.log(filteredVideos);
            } catch (error) {
                alert('Error al cargar los videos.');
                console.log(error.message)
            }
        };

        fetchVideos();
    }, [offset, limit, videoId]);

    return (
        <div>
            {
                listVideos.map((item) => (
                    <VideoCard key={item.id} item={item} />
                ))
            }
        </div>
    )
}

ListsVideosPlayer.propTypes = {
    videoId: PropTypes.string.isRequired,
};

export default ListsVideosPlayer