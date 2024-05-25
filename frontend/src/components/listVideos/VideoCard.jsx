import PropTypes from 'prop-types';
import './VideoCard.css'

const VideoCard = ({ item }) => {
    const { title, description, thumbnail } = item
    return (
        <div className='card card-width'>
            <img src={thumbnail} className="card-img-top" alt="Imagen de ejemplo" />
            <div className='card-body'>
                <h5 className="card-title text-ellipsis">{title}</h5>
                <p className="card-text text-ellipsis">{description}</p>
            </div>
        </div>
    )
}

VideoCard.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired
    }).isRequired,
};

export default VideoCard