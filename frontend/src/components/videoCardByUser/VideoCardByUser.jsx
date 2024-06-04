import PropTypes from "prop-types";
import "./VideoCardByUser.css";
import { Dropdown } from 'react-bootstrap'; // Importación del Dropdown
import { useNavigate } from "react-router-dom";

const VideoCardByUser = ({ item }) => {
  const { id, title, username, thumbnail, views, duration } = item;
  const navigate = useNavigate()

  return (
    <div className="card card-width-user card-border">
      <div className="position-relative cursor-pointer" onClick={() => navigate(`/watch-video/${id}`)}>
        {/* <video src=""></video> */}
        <img src={thumbnail} className="card-img-top" alt={`Imagen ${item.title}`} />
        <span className="position-absolute end-0 bottom-0 z-3 text-white text-center rounded-1 px-1 m-2 span-duration">{duration}</span>
      </div>
      <div className="card-body pb-0 pt-2">
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="card-title m-0 pe-2 text-start text-ellipsis" title={title}>{title}</h6>
          <Dropdown> {/* as="div" para poder personalizar */}
            <Dropdown.Toggle as="div" variant="secondary" id="dropdown-custom" className="custom-dropdown-toggle">
              <i className="bi bi-three-dots-vertical"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className='p-0' style={{ minWidth: '100px' }}>
              <Dropdown.Item href="/" className='option rounded'><i className="bi bi-pencil-square me-2 text-primary"></i> Editar</Dropdown.Item>
              <Dropdown.Item href="/" className='option rounded'><i className="bi bi-trash3-fill me-2 text-danger"></i> Eliminar</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex justify-content-between">
          <p className="card-text text-ellipsis text-primary">{username}</p>
          <p><i className="bi bi-eye text-primary"></i> {views}</p>
        </div>
      </div>
    </div>
  );
};

VideoCardByUser.propTypes = {
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

export default VideoCardByUser;
