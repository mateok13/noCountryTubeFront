import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import './VideoCardPlayer.css'
import moment from "moment"

function VideoCardPlayer({ item }) {
    const { id, title, nameUser, miniature, duration, createdAt, viewCount } = item;
    
    const navigate = useNavigate()

    return (
        <div className="contenidoVideoCardPlayer">
            <div className="contenidoMiniature" onClick={() => navigate(`/watch-video/${id}`)}>
                <img src={miniature} className="miniatureVideo" />
                <span className="durationVideo">{duration}</span>
            </div>
            <div className="infoVideo">
                <h1 className="titleVideo" onClick={() => navigate(`/watch-video/${id}`)}>{title}</h1>
                <div>
                    <h1 className="userNameVideo" onClick={() => navigate(`/list-videos/${nameUser}`)}>{nameUser}</h1>
                    <h1 className="timeVideo">{viewCount} views • {moment(createdAt).fromNow()}</h1>
                </div>
            </div>
        </div>
    )
}

VideoCardPlayer.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        nameUser: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        miniature: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        viewCount: PropTypes.number.isRequired
    }).isRequired,
};

export default VideoCardPlayer