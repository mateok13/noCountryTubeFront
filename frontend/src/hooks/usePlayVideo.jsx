import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { environment } from './environment';

const usePlayVideo = ({ videoId }) => {
    const [videoData, setVideoData] = useState(null);
    const [progress, setProgress] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [menu, setMenu] = useState('main');
    const [menuOptions] = useState({
        main: ['Subtítulos', 'Calidad de Video', 'Velocidad de Reproducción'],
        subtitles: ['Volver', 'Desactivados', 'Español'],
        quality: ['Volver', '0.5', '0.75', 'Normal', '1.25', '1.75'],
        speed: ['Volver', 'Automática', '360', '480']
    });

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

    const handleMenuChange = (option) => {
        if (option === 'Volver') {
            setMenu('main');
        } else {
            const newMenu = option.toLowerCase().replace(' de ', ' ').replace(' ', '');
            setMenu(newMenu);
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
        handleMenuChange
    };
};

export default usePlayVideo;