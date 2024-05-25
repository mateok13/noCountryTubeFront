import PropTypes from "prop-types";
import "./VideoCard.css";

const VideoCard = ({ item }) => {
  const { title, author, thumbnail, views } = item;

  return (
    <div className="card card-width">
      <img src={thumbnail} className="card-img-top" alt="Imagen de ejemplo" />
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
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};

export default VideoCard;
