import PropTypes from "prop-types";
import usePlayVideo from "../../hooks/usePlayVideo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import moment from "moment"
import './PlayVideo.css';

function PlayVideo({ videoId, refresh }) {

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
    } = usePlayVideo({ videoId, refresh });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setComentario(event.target.value);
    };

    const handleSaveLike = () => {
        if (accessToken && accessToken !== "null") {
            saveLike();
            setLikeActive(true);
            setDislikeActive(false);
        }
    };

    const handleSaveDislike = () => {
        if (accessToken && accessToken !== "null") {
            saveDislike();
            setLikeActive(false);
            setDislikeActive(true);
        }
    };

    const handleSaveComment = () => {
        if (accessToken && accessToken !== "null" && comentario.trim() !== '') {
            saveComment(comentario);
        }
    };

    const [buttonSaveText, setButtonSaveText] = useState('Guardar');
    const [buttonSuscribeText, setButtonSuscribeText] = useState('Suscribirse');

    const handleButtonSaveClick = () => {
        if (accessToken && accessToken !== "null") {
            setButtonSaveText(buttonSaveText === 'Guardar' ? 'Guardado' : 'Guardar');
        }
    };

    const handleButtonSuscribeClick = () => {
        if (accessToken && accessToken !== "null") {
            setButtonSuscribeText(buttonSuscribeText === 'Suscribirse' ? 'Suscrito' : 'Suscribirse');
        }
    };

    if (!videoData) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="contenidoPlayVideo">
            <div className="playerNoCountry">
                <video key={videoData.video} autoPlay ref={videoRef} className="videoNoCountry" onClick={togglePlay} onEnded={() => setIsPlaying(false)}>
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
                        <i className={`bi bi-hand-thumbs-up iconIteraction ${likeActive ? 'likeTrue' : ''} ${!accessToken || accessToken === "null" ? 'noUserLogged noLike' : ''}`} onClick={handleSaveLike}>{videoData.likeCount}</i>
                        <i className={`bi bi-hand-thumbs-down iconIteraction ${dislikeActive ? 'likeTrue' : ''} ${!accessToken || accessToken === "null" ? 'noUserLogged noLike' : ''}`} onClick={handleSaveDislike}>{videoData.disLikeCount}</i>
                    </div>
                    <div>
                        <button className={"buttonSaveVideo"} onClick={handleButtonSaveClick} disabled={!accessToken || accessToken === "null"}>
                            {buttonSaveText}
                        </button>
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
                <button className='buttonNoCountry suscribeButton' onClick={handleButtonSuscribeClick} disabled={!accessToken || accessToken === "null"}>
                    {buttonSuscribeText}
                </button>
            </div>
            <div className="agregarComentario">
                <i className="bi bi-person-circle avatarUserName"></i>
                <div className="inputIconContainer">
                    <input className="inputComentario" type="text" placeholder="Escribir comentario" value={comentario} onChange={handleInputChange} disabled={!accessToken || accessToken === "null"} />
                    <i className={`bi bi-send sendIcon ${!accessToken || accessToken === "null" ? 'noUserLogged' : ''}`} onClick={handleSaveComment}></i>
                </div>
            </div>
            <div className="contenidoComentarios">
                {
                    videoData.comments.length > 0 ? (
                        videoData.comments.map((item) => (
                            <div key={item.id} className="comentariosVideo">
                                <div className="titleComments">
                                    <h1 className="textComments">{item.userName}</h1>
                                    <h1 className="textComments">{moment(item.createdAt).fromNow()}</h1>
                                </div>
                                <h1 className="textComments">{item.comment}</h1>
                                <div className="iconsIteractionsVideo">
                                    <i className="bi bi-hand-thumbs-up iconIteraction"></i>
                                    <i className="bi bi-hand-thumbs-down iconIteraction"></i>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="comentariosVideo">
                            <h1 className="textComments">No hay comentarios en este video</h1>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

PlayVideo.propTypes = {
    videoId: PropTypes.string.isRequired,
    refresh: PropTypes.node
};

export default PlayVideo;