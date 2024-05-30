import PropTypes from "prop-types";
import "./VideoCard.css";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ item }) => {
  const { id, title, username, thumbnail, views, duration } = item;
  const navigate = useNavigate()

  return (
    <div className="card card-width card-border">
      <div className="position-relative cursor-pointer" onClick={() => navigate(`/watch-video/${id}`)}>
        {/* <video src=""></video> */}
        <img src={thumbnail} className="card-img-top" alt="Imagen de ejemplo" />
        <span className="position-absolute end-0 bottom-0 z-3 text-white text-center rounded-1 px-1 m-2 span-duration">{duration}</span>
      </div>
      <div className="card-body pb-0">
        <h5 className="card-title text-ellipsis">{title}</h5>
        <div className="d-flex justify-content-between">
          <p className="card-text text-ellipsis text-primary cursor-pointer" onClick={() => navigate(`/list-videos/${username}`)}>{username}</p>
          <p><i className="bi bi-eye text-primary"></i> {views}</p>
        </div>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    // video: PropTypes.string.isRequired,
    // comments: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    // likes: PropTypes.number.isRequired,
    // dislikes: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
  }).isRequired,
};

export default VideoCard;
