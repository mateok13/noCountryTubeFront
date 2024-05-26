import PropTypes from "prop-types";
import "./VideoCard.css";

const VideoCard = ({ item }) => {
  const { title, author, thumbnail, views, duration } = item;

  return (
    <div className="card card-width">
      <div className="position-relative">
        <img src={thumbnail} className="card-img-top" alt="Imagen de ejemplo" />
        <span className="position-absolute end-0 bottom-0 z-3 text-white text-center rounded-1 px-1 m-2 border span-duration">{duration}</span>
      </div>
      <div className="card-body pb-0">
        <h5 className="card-title text-ellipsis">{title}</h5>
        <div className="d-flex justify-content-between">
          <p className="card-text text-ellipsis">{author}</p>
          <p>{views} Visualizaciones</p>
        </div>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
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
