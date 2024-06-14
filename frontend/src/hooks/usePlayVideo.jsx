import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { environment } from './environment';
import useUser from './useUser';

const usePlayVideo = ({ videoId }) => {
    const [videoData, setVideoData] = useState(null);
    const [progress, setProgress] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const { accessToken } = useUser();
    const dropdownRef = useRef(null);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [menu, setMenu] = useState('main');
    const [menuOptions] = useState({
        main: ['Subtítulos', 'Calidad de Video', 'Velocidad de Reproducción'],
        subtitles: ['Volver', 'Desactivados', 'Español'],
        speed: ['Volver', '0.5', '0.75', 'Normal', '1.25', '1.75'],
        quality: ['Volver', 'Automática', '360', '480']
    });
    const [comentario, setComentario] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `${environment.url}videos/${videoId}`;
                const response = await axios.get(url);
                if (response.data.ok) {
                    setVideoData(response.data.data);
                } else {
                    console.error('Error al obtener el video:', response.data.message);
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        };
        setIsPlaying(true);
        fetchData();
    }, [videoId]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (videoRef.current) {
                const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
                setProgress(currentProgress);
            }
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);

    const saveLike = async () => {
        if (!accessToken) return;
        const url = `${environment.url}iteration-video/save-like`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    videoId: videoId,
                    like: true
                })
            });

            const data = await response.json();
            if (data.success) {
                console.log('Like guardado con éxito');
            } else {
                console.log('Error al guardar el like');
            }
        } catch (error) {
            console.error('Error al enviar el like:', error);
        }
    };

    const saveDislike = async () => {
        if (!accessToken) return;
        const url = `${environment.url}iteration-video/save-dislike`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    videoId: videoId,
                    disLike: true
                })
            });

            const data = await response.json();
            if (data.success) {
                console.log('Dislike guardado con éxito');
            } else {
                console.log('Error al guardar el dislike');
            }
        } catch (error) {
            console.error('Error al enviar el dislike:', error);
        }
    };

    const saveComment = async (commentText) => {
        if (!accessToken) return;
        const url = `${environment.url}iteration-video/save-comment`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    videoId: videoId,
                    commentText: commentText
                })
            });

            const data = await response.json();
            if (data.success) {
                console.log('Comentario guardado con éxito');
                setComentario("")
            } else {
                console.log('Error al guardar el comentario');
            }
        } catch (error) {
            console.error('Error al enviar el comentario:', error);
        }
    };

    const handleMenuChange = (option) => {
        if (option === 'Volver') {
            setMenu('main');
        } else if(option === 'Subtítulos'){
            setMenu('subtitles');
        } else if(option === 'Calidad de Video'){
            setMenu('quality');
        } else {
            setMenu('speed');
        }
    };

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    const enterFullScreen = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
    };

    const handleProgressBarClick = (e) => {
        const progressBarContainer = e.target.parentNode;
        const progressBarWidth = progressBarContainer.clientWidth;
        const clickPositionX = e.nativeEvent.offsetX;
        const newTime = (clickPositionX / progressBarWidth) * videoRef.current.duration;
        videoRef.current.currentTime = newTime;
        setProgress((newTime / videoRef.current.duration) * 100);
    };

    return {
        videoData, 
        videoRef, 
        isPlaying, 
        setIsPlaying,
        isMuted, 
        progress, 
        togglePlay, 
        toggleMute,
        enterFullScreen,
        handleProgressBarClick, 
        showDropdown,
        dropdownRef,
        toggleDropdown,
        menu,
        menuOptions,
        handleMenuChange,
        saveLike,
        saveDislike,
        saveComment,
        accessToken,
        comentario, 
        setComentario
    };
};

export default usePlayVideo;