import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import usePlayVideo from "../../hooks/usePlayVideo";

import './PlayVideo.css';

function PlayVideo({ videoId }) {

    const { videoData } = usePlayVideo({ videoId });

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);

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

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (videoRef.current) {
                const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
                setProgress(currentProgress);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleProgressBarClick = (e) => {
        const progressBarContainer = e.target.parentNode;
        const progressBarWidth = progressBarContainer.clientWidth;
        const clickPositionX = e.nativeEvent.offsetX;
        const newTime = (clickPositionX / progressBarWidth) * videoRef.current.duration;
        videoRef.current.currentTime = newTime;
        setProgress((newTime / videoRef.current.duration) * 100);
    };

    if (!videoData) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="contenidoPlayVideo">
            <div className="playerNoCountry">
                <video autoPlay ref={videoRef} className="videoNoCountry" onClick={togglePlay} onEnded={() => setIsPlaying(false)}>
                    <source src={videoData.video} type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
                {!isPlaying && (
                    <i className="bi bi-play-circle iconPlay" onClick={togglePlay}></i>
                )}
                <i className="bi bi-pause-circle iconPlay iconPaused" onClick={togglePlay}></i>
                <div className="progressBarContainer" onClick={handleProgressBarClick}>
                    <div className="progressBar"
                        style={{ width: `${progress}%`, height: '5px', backgroundColor: '#09fca7' }}>
                    </div>
                </div>
                <div className="controlesVideoNoCountry">
                    <div className="iconsPlayerNoCountry">
                        {isPlaying ? (
                            <i className="bi bi-pause-fill" onClick={togglePlay}></i>
                        ) : (
                            <i className="bi bi-play-fill" onClick={togglePlay}></i>
                        )}
                        <i className={`bi ${isMuted ? 'bi-volume-mute-fill' : 'bi-volume-down-fill'}`} onClick={toggleMute}></i>
                    </div>
                    <div className="iconsPlayerNoCountry">
                        <i className="bi bi-fullscreen" onClick={enterFullScreen}></i>
                        <i className="bi bi-gear-fill"></i>
                    </div>
                </div>
            </div>
            <div className="footerVideo">
                <h1 className="tituloPlayVideo">{videoData.title}</h1>
                <div className="iteractionsVideo">
                    <div className="iconsIteractionsVideo">
                        <i className="bi bi-hand-thumbs-up iconIteraction"></i>
                        <i className="bi bi-hand-thumbs-down iconIteraction"></i>
                    </div>
                    <div>
                        <button className="buttonSaveVideo">Guardar</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

PlayVideo.propTypes = {
    videoId: PropTypes.string.isRequired,
};

export default PlayVideo;