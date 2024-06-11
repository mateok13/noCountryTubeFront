import PropTypes from "prop-types";
import usePlayVideo from "../../hooks/usePlayVideo";
import { useNavigate } from "react-router-dom";
import './PlayVideo.css';

function PlayVideo({ videoId }) {

    const {
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
    } = usePlayVideo({ videoId });

    const navigate = useNavigate()

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
                        <div className="dropdownPlayVideo" ref={dropdownRef}>
                            <i className="bi bi-gear-fill" onClick={toggleDropdown}></i>
                            {showDropdown && (
                                <div className="dropdownContentMenuPlayVideo">
                                    {menuOptions[menu].map((option, index) => (
                                        <button
                                            className={`buttonMenuPlayVideo ${option === 'Desactivados' || option === 'Normal' || option === 'Automática' ? 'optionDefault' : ''}`}
                                            key={index}
                                            onClick={() => handleMenuChange(option)}
                                        >
                                            {option === 'Volver' ? <i className="bi bi-chevron-left"></i> : null}
                                            {option}
                                            {menu === 'main' ? <i className="bi bi-chevron-right"></i> : null}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <i className="bi bi-fullscreen" onClick={enterFullScreen}></i>
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
            <div className="infoChannel">
                <div className="profileUserVideo" onClick={() => navigate(`/list-videos/${videoData.nameUser}`)}>
                    <i className="bi bi-person-circle"></i>
                    <div className="infoUser">
                        <h1 className="nameUser">{videoData.nameUser}</h1>
                        <h1 className="suscriptoresUser"># suscriptores</h1>
                    </div>
                </div>
                <button className='buttonNoCountry suscribeButton'>Suscribirse</button>
            </div>
        </div>
    );
}

PlayVideo.propTypes = {
    videoId: PropTypes.string.isRequired,
};

export default PlayVideo;