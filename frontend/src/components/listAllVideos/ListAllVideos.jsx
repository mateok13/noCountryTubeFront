import { Link } from "react-router-dom";
import VideoCard from "../videoCard/VideoCard";
import './ListAllVideos.css';
import { useEffect, useState } from "react";
import { environment } from "../../hooks/environment";
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

const ListAllVideos = () => {
  const [listVideos, setListVideos] = useState([]);
  const [limit] = useState(9);
  const [offset, setOffset] = useState(0);
  const totalVideos = 15; // FALTA EL TOTAL DE VIDEOS
  const [isLoading, setIsLoading] = useState(true);
  const spinnerVideo = (
    <div className="d-flex justify-content-center align-items-center gap-2 px-10">
      <Spinner className="color-spinner"></Spinner>
    </div>
  )

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${environment.url}videos`, {
          params: {
            limit,
            offset
          }
        });
        setListVideos([...listVideos, ...response.data.data]);
        console.log(response.data.data);
      } catch (error) {
        alert('Error al cargar los videos.');
        console.log(error.message)
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [offset, limit]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
        if (offset + limit < totalVideos) {
          setOffset(prevOffset => prevOffset + limit);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, offset, limit, totalVideos]);

  return (
    <div className="absolute m-240 m-250 pb-4">
      <Link to='/upload-video' className="ms-5 position-absolute text-white">Link Formulario de video</Link>
      <div className="container mt-5 d-flex justify-content-center align-items-start flex-wrap gap-4 min-vh-100">
        {
          // isLoading && listVideos.length == 0 ? <Spinner className="color-spinner"></Spinner> :
          listVideos.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))
        }
        {(isLoading && listVideos.length > 1) && spinnerVideo}
      </div>
    </div>
  );
};

export default ListAllVideos;
