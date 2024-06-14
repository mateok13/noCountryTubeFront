import PropTypes from "prop-types";
import "./VideoCardByUser.css";
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import moment from "moment"

moment.updateLocale('es', {
  relativeTime: {
    future: 'en %s',
    past: 'hace %s',
    s: 'unos segundos',
    ss: '%d segundos',
    m: 'un minuto',
    mm: '%d minutos',
    h: 'una hora',
    hh: '%d horas',
    d: 'un día',
    dd: '%d días',
    M: 'un mes',
    MM: '%d meses',
    y: 'un año',
    yy: '%d años'
  }
});
moment.locale('es');

const VideoCardByUser = ({ item, deleteVideo, usernameChannel }) => {
  const { id, title, miniatureUrl, createdAt, duration } = item;
  const navigate = useNavigate()
  const usernameStorage = localStorage.getItem('userName')

  console.log(moment.locale())

  return (
    <div className="card-width-user card-border">
      <div className="position-relative cursor-pointer" onClick={() => navigate(`/watch-video/${id}`)}>
        {/* <video src=""></video> */}
        <img src={miniatureUrl} className="card-img-top card-img rounded" alt={`Imagen ${item.title}`} />
        <span className="position-absolute end-0 bottom-0 z-3 text-white text-center rounded-1 px-1 m-2 span-duration">{duration}</span>
      </div>
      <div className="pb-0 pt-2 ps-1">
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="m-0 pe-2 text-start text-ellipsis" title={title}>{title}</h6>
          <Dropdown> {/* as="div" para poder personalizar */}
            <Dropdown.Toggle as="div" variant="secondary" id="dropdown-custom" className="custom-dropdown-toggle">
              <i className="bi bi-three-dots-vertical"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className='p-0 menu-options' style={{ minWidth: '100px' }}>
              {usernameChannel == usernameStorage ?
                <>
                  <Dropdown.Item className='option rounded-top user-select-none'><i className="bi bi-pencil-square me-2 text-primary"></i> Editar</Dropdown.Item>
                  <Dropdown.Item className='option user-select-none' onClick={() => deleteVideo(id)}><i className="bi bi-trash3-fill me-2 text-danger"></i> Eliminar</Dropdown.Item>
                  <Dropdown.Item className='option user-select-none'><i className="bi bi-download me-2 text-green"></i> Descargar</Dropdown.Item>
                  <Dropdown.Item className='option rounded-bottom user-select-none'><i className="bi bi-share-fill me-2 text-info"></i> Compartir</Dropdown.Item>
                </>
                :
                <>
                  <Dropdown.Item className='option user-select-none'><i className="bi bi-download me-2 text-green"></i> Descargar</Dropdown.Item>
                  <Dropdown.Item className='option rounded-bottom user-select-none'><i className="bi bi-share-fill me-2 text-info"></i> Compartir</Dropdown.Item>
                </>
              }
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-gray"><i className="text-green bi bi-eye"></i> 10 Vistas <span className="fw-bold">·</span> {moment(createdAt).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

VideoCardByUser.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string,
    title: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
    miniatureUrl: PropTypes.string.isRequired,
    // video: PropTypes.string.isRequired,
    // comments: PropTypes.string.isRequired,
    views: PropTypes.number,
    // likes: PropTypes.number.isRequired,
    // dislikes: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
  }).isRequired,
  deleteVideo: PropTypes.func.isRequired,
  usernameChannel: PropTypes.string
};

export default VideoCardByUser;