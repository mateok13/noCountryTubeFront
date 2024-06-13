import PropTypes from "prop-types";
import "./VideoCard.css";
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { environment } from "../../hooks/environment";

const VideoCard = ({ item }) => {
  const { id, title, nameUser, miniature, duration } = item;
  const navigate = useNavigate()

  return (
    <div className="text-white card-width card-border">
      <div className="position-relative cursor-pointer" onClick={() => navigate(`/watch-video/${id}`)}>
        {/* <video src=""></video> */}
        <img src={miniature} className="card-img-top card-img rounded" alt={`Imagen ${item.title}`} />
        <span className="position-absolute end-0 bottom-0 z-3 text-white text-center rounded-1 px-1 m-2 span-duration">{duration}</span>
      </div>
      <div className="pb-0 pt-2 ps-0">
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="m-0 pe-1 text-start text-ellipsis" title={title}>{title}</h6>
          <Dropdown> {/* as="div" para poder personalizar */}
            <Dropdown.Toggle as="div" variant="secondary" id="dropdown-custom" className="custom-dropdown-toggle">
              <i className="ps-1 bi bi-three-dots-vertical"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className='p-0 menu-options' style={{ minWidth: '100px' }}>
              <Dropdown.Item className='option rounded-top user-select-none'><i className="bi bi-floppy2 me-2 text-green"></i> Guardar en playlist</Dropdown.Item>
              <Dropdown.Item className='option user-select-none'><i className="bi bi-share-fill me-2 text-green"></i> Compartir en redes</Dropdown.Item>
              {/* <Dropdown.Item className='ps-4 option user-select-none'>Opción 3</Dropdown.Item>
              <Dropdown.Item className='ps-4 option rounded-bottom user-select-none'>Opción 4</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex justify-content-between flex-column">
          <p className="text-gray width-p my-0 text-ellipsis cursor-pointer" onClick={() => navigate(`/list-videos/${nameUser}`)}>{nameUser}</p>
          <p className="text-gray"><i className="text-green bi bi-eye"></i> 10 Vistas <span className="fw-bold">·</span> hace 2 horas</p>
        </div>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nameUser: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // video: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
    miniature: PropTypes.string.isRequired,
    // video: PropTypes.string.isRequired,
    // comments: PropTypes.string.isRequired,
    // views: PropTypes.number.isRequired,
    // likes: PropTypes.number.isRequired,
    // dislikes: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
  }).isRequired,
};

export default VideoCard;
