import PropTypes from "prop-types";
import './PlayVideo.css'

function PlayVideo({ videoId }) {


    return (
        <div>
            <h1>{videoId}</h1>
            <video width="320" height="240" controls>
                <source src={"https://www.youtube.com/watch?v=G1vR6aZ4Gwo"} type="video/mp4" />
            </video>
        </div>
    )
}

PlayVideo.propTypes = {
    videoId: PropTypes.number.isRequired,
};

export default PlayVideo