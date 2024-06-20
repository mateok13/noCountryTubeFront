import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { environment } from './environment';
import useUser from './useUser';

const usePlayVideo = ({ videoId, refresh }) => {
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
    const [likeActive, setLikeActive] = useState(false);
    const [dislikeActive, setDislikeActive] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `${environment.url}videos/${videoId}`;
                const response = await axios.get(url);
                if (response.data.ok) {
                    setVideoData(response.data.data);
                    setLikeActive(response.data.data.isLike);
                    setDislikeActive(response.data.data.isDisLike);
                    if (accessToken && accessToken !== "null") {
                        const viewUrl = `${environment.url}iteration-video/save-view`;
                        const viewResponse = await axios.post(viewUrl, { videoId }, {
                            headers: {
                                'Authorization': `Bearer ${accessToken}`
                            }
                        });
                        if (viewResponse.data.success) {
                            console.log('Vista del video guardada con éxito.');
                        } else {
                            console.error('Error al guardar la vista del video:', viewResponse.data.message);
                        }
                    }
                } else {
                    console.error('Error al obtener el video:', response.data.message);
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        };

        setIsPlaying(true);
        fetchData();
    }, [videoId, accessToken]);

    useEffect(() => {
        setVideoData(refresh.data);
        setLikeActive(refresh.data?.isLike);
        setDislikeActive(refresh.data?.isDisLike);
    }, [refresh]);

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
            const response = await axios.post(url, {
                videoId: videoId,
                like: true
            }, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (response.data.success) {
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
            const response = await axios.post(url, {
                videoId: videoId,
                disLike: true
            }, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (response.data.success) {
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
            const response = await axios.post(url, {
                videoId: videoId,
                commentText: commentText
            }, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (response.data.success) {
                console.log('Comentario guardado con éxito');
                setComentario("");
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
        } else if (option === 'Subtítulos') {
            setMenu('subtitles');
        } else if (option === 'Calidad de Video') {
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
        setComentario,
        likeActive,
        setLikeActive,
        dislikeActive,
        setDislikeActive
    };
};

export default usePlayVideo;