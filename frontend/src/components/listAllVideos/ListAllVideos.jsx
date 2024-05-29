
import VideoCard from "../videoCard/VideoCard";
import ejemploListadoVideos from "./ejemploListadoVideos.json";

const ListAllVideos = () => {
  // const [listVideos, setListVideos] = useState(ejemploListadoVideos)
  const listVideos = ejemploListadoVideos;

  return (
    <>
      <h4 className="text-center my-4">List Videos</h4>
      <div className="container d-flex justify-content-center align-items-start flex-wrap gap-4 min-vh-100">
        {listVideos.map((item) => (
          <VideoCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default ListAllVideos;
