import axios from "axios";
import { useState, useEffect } from "react";
import { environment } from './environment'

const usePlayVideo = ({ videoId }) => {
    console.log("el pinche id",videoId)
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        const url = environment.url + `videos/${videoId}`;
        axios.get(url)
            .then(response => {
                console.log(response.data)
                const { data } = response;
                if (data.ok) {
                    setVideoData(data.data);
                } else {
                    console.error('Error al obtener el video:', data.message);
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });
    }, [videoId]);

    return {
        videoData
    }
}

export default usePlayVideo