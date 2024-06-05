import { Link } from "react-router-dom";
import VideoCard from "../videoCard/VideoCard";
import ejemploListadoVideos from "./ejemploListadoVideos.json";
import './ListAllVideos.css'

const ListAllVideos = () => {
  // const [listVideos, setListVideos] = useState(ejemploListadoVideos)
  const listVideos = ejemploListadoVideos;

  return (
    <div className="absolute m-240 m-250 pb-4">
      <Link to='/upload-video' className="ms-5 position-absolute text-white">Link Formulario de video</Link>
      <div className="container mt-5 d-flex justify-content-center align-items-start flex-wrap gap-4 min-vh-100">
        {listVideos.map((item) => (
          <VideoCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ListAllVideos;