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
            <div className="contenidoComentarios">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus sed perspiciatis exercitationem velit doloremque consequuntur reprehenderit iste, voluptatibus magnam repudiandae rem possimus nihil ratione suscipit autem qui atque dolorem eligendi.
                Odit architecto id ipsam assumenda quos sint vero eligendi deserunt, enim velit sit ea alias, ex expedita hic. Eveniet ipsam, dicta natus illo hic provident inventore aliquid magnam tempore laborum.
                Error deleniti officia obcaecati mollitia expedita ratione dolorem debitis soluta tenetur. Vel commodi repudiandae dolorum id reprehenderit similique, at eius atque in est, minima magnam ut, beatae molestias quis provident.
                Accusantium suscipit soluta nihil eligendi neque amet veritatis hic dolorem aliquid cum mollitia possimus recusandae tenetur exercitationem necessitatibus corrupti, autem magnam ullam quod. Reprehenderit, itaque tenetur maxime cum nobis vel?
                Accusamus iste consequatur obcaecati, quod quae labore corporis dolorum aliquid nesciunt a autem sapiente, similique id quam maxime fugit omnis excepturi mollitia expedita cum sint eligendi doloribus. Necessitatibus, iste natus?
                Tempore fugiat ad sed nisi quas dignissimos harum necessitatibus voluptate velit illum earum inventore voluptas impedit architecto, nesciunt error aliquid itaque eaque illo cumque enim ut. Ipsam minus mollitia at.
                Aspernatur, illo exercitationem ipsam fugiat tempore ab delectus ipsum! Vitae iure quo possimus atque harum, labore numquam consectetur laborum magnam illo cupiditate minus. Recusandae consectetur tempora, atque aliquam quibusdam sunt.
                Maxime placeat assumenda nam unde enim blanditiis adipisci reiciendis. Nihil possimus labore hic voluptatibus at molestias delectus consectetur, odit fuga aut maxime exercitationem, iure aliquid. Voluptatibus ratione voluptates sunt dolorem!
                Recusandae atque harum iusto impedit sed voluptatem molestiae delectus doloribus! Praesentium omnis quas ullam sunt, perspiciatis distinctio, enim tenetur voluptatum sit nostrum ex nemo ab earum rerum impedit, quibusdam at?
                Doloribus, dolores ea! Alias numquam pariatur quos quaerat! Cum impedit dicta voluptas neque adipisci quos tempora quidem facilis, omnis beatae officia inventore iure repudiandae voluptates deserunt rerum ducimus, delectus distinctio.
            </div>
        </div>
    );
}

PlayVideo.propTypes = {
    videoId: PropTypes.string.isRequired,
};

export default PlayVideo;