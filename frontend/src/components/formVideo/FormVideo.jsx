import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoThumbnail from "react-video-thumbnail";
import "./FormVideo.css";

const formValues = {
  username: 'username',
  title: '',
  description: '',
  thumbnail: '',
  video: '', // archivo
  duration: '',
  comments: true,
  views: 0,
  likes: 0,
  dislikes: 0,
}

const FormVideo = () => {
  const [formData, setFormData] = useState(formValues)
  const [thumbnails, setThumbnails] = useState([])
  const [selectedThumbnail, setSelectedThumbnail] = useState(null)
  const videoInputRef = useRef(null);
  const snapshotList = [3, 6, 30] // Toma capturas en el segundo 3, 6, 30
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setThumbnails([])
    setSelectedThumbnail(null)
    setFormData(formValues);

    if (videoInputRef.current) {
      videoInputRef.current.value = null;
    }

    alert("Video subido exitosamente");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "comments" ? value === "true" : value,
    }));
  };

  const handleVideoFileChange = (e) => {
    const file = e.target.files[0]
    setFormData((prevFormData) => ({ ...prevFormData, video: file }))
  };

  useEffect(() => {
    if (formData.video) {
      // Se crea un objeto de video temporal para obtener la duración
      const videoElement = document.createElement('video');
      videoElement.src = URL.createObjectURL(formData.video);
      videoElement.onloadedmetadata = () => {
        setFormData((prevFormData) => ({ ...prevFormData, duration: formatVideoDuration(videoElement.duration), }));
      };
    }
  }, [formData.video]);

  const formatVideoDuration = (duration) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.round(duration % 60);
    return duration > 3599 ? `${hours}:${minutes}:${seconds}` : duration > 59 ? `${minutes}:${seconds}` : `0:${seconds}`;
  }

  const handleImageFileChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader(file)
    reader.onload = () => {
      const base64File = reader.result
      setSelectedThumbnail(base64File)
      setFormData((prevFormData) => ({ ...prevFormData, thumbnail: base64File }))
    };
    reader.readAsDataURL(file)
  };

  const handleSelectThumbnail = (thumbnail) => {
    setSelectedThumbnail(thumbnail);
    setFormData((prevFormData) => ({ ...prevFormData, thumbnail }))
  };

  const generateThumbnails = () => {
    return snapshotList.map((item, index) => (
      <div key={index} className="d-none">
        <VideoThumbnail videoUrl={URL.createObjectURL(formData.video)}
          thumbnailHandler={(thumbnail) => setThumbnails((prevThumbnails) => [...prevThumbnails, thumbnail,])}
          snapshotAtTime={item} />
      </div>))
  }

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form className="form form-control shadow p-4" onSubmit={handleSubmit}>
      <div>
        <h4>Información General</h4>
        <input className="form-control" type="text" placeholder="Título" id="title" name="title" onChange={handleChange} value={formData.title} required autoFocus />
        <textarea className="form-control resize-none my-2" name="description" id="description" placeholder="Descripción" onChange={handleChange} value={formData.description} required></textarea>
        <div className="d-flex flex-column my-2">
          <label>Video</label>
          <input ref={videoInputRef} className="form-control" type="file" accept="video/*" onChange={handleVideoFileChange} title="Subir Video" required />

          {formData.video && generateThumbnails()}
        </div>

        <div className="d-flex justify-content-between mt-2 overflow-hidden flex-wrap">
          {/* INPUT FILE SUBIR MINIATURA */}
          <div className="mb-1">
            <label htmlFor="file" className="label-file text-center px-4 py-2 rounded cursor-pointer">Subir Miniatura</label>
            <input type="file" id="file" className="input-file" accept="image/*" onChange={handleImageFileChange} />
          </div>
          {thumbnails.map((item, index) => (
            <div key={index} className="cursor-pointer rounded thumbnail-border">



              {/* BORRAR EL WIDTH AQUI, CORREGIR EL HEIGHT POR SI SE SUBE UN VIDEO SHORT, COLOCAR OBJECT-FIT */}
              <img className="rounded" width={130} height={74} src={item} alt={`Thumbnail ${index + 1}`} onClick={() => handleSelectThumbnail(item)} />



            </div>
          ))}
        </div>

        {selectedThumbnail && (
          <div className="mt-2">
            <p className="mb-1">Miniatura seleccionada</p>
            <img className="object-fit rounded bg-dark thumbnail-border" width={150} height={84} src={selectedThumbnail} alt="Selected Thumbnail" />
          </div>
        )}
      </div>

      <div className="my-3">
        <h4>Detalles</h4>
        <div>
          <label>Comentarios</label>
          <div className="d-flex gap-3">
            <div>
              <input className="me-1 cursor-pointer" id="comments-on" type="radio" name="comments" value="true" onChange={handleChange} checked={formData.comments === true} />
              <label htmlFor="comments-on">On</label>
            </div>
            <div>
              <input className="me-1 cursor-pointer" id="comments-off" type="radio" name="comments" value="false" onChange={handleChange} checked={formData.comments === false} />
              <label htmlFor="comments-off">Off</label>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-primary w-50" type="submit">Subir Video</button>
        <button className="btn btn-primary w-50" type="reset" onClick={handleCancel}>Cancelar</button>
      </div>
    </form>
  );
};

export default FormVideo;
