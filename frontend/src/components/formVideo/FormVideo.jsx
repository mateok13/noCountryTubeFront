import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoThumbnail from "react-video-thumbnail";
import "./FormVideo.css";

const formValues = {
  title: "",
  description: "",
  thumbnail: "",
  video: "",
  tags: "",
  category: "",
  comments: "on",
};

const FormVideo = () => {
  const [formData, setFormData] = useState(formValues)
  const [videoFile, setVideoFile] = useState(null)
  const [thumbnails, setThumbnails] = useState([])
  const [selectedThumbnail, setSelectedThumbnail] = useState(null)
  const snapshotList = [3, 6, 30]
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(formValues);
    alert("Uploaded!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleVideoFileChange = (e) => {
    const file = e.target.files[0]
    setVideoFile(file)
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader(file)
    reader.onload = () => {
      const base64File = reader.result
      setSelectedThumbnail(base64File)
    };
    reader.readAsDataURL(file)
  };

  const handleSelectThumbnail = (thumbnail) => {
    setSelectedThumbnail(thumbnail);
  };

  console.log(selectedThumbnail);

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form className="form-control shadow p-4" onSubmit={handleSubmit}>
      <div>
        <h4>Información General</h4>
        <input className="form-control" type="text" placeholder="Title" id="title" name="title" onChange={handleChange} value={formData.title} required autoFocus />
        <textarea className="form-control resize-none my-2" name="description" id="description" placeholder="Description" onChange={handleChange} value={formData.description} required></textarea>
        {/* <div className="d-flex flex-column my-2">
          <label htmlFor="thumbnail">Thumbnail (Upload a picture)</label>
          <input type="file" id="thumbnail" name="thumbnail" onChange={handleFileChange} required />
        </div> */}
        <div className="d-flex flex-column my-2">
          <label>Video</label>
          <input className="form-control" type="file" accept="video/*" onChange={handleVideoFileChange} title="Subir Video" required />

          {videoFile &&
            snapshotList.map((item, index) => (
              <div key={index} className="d-none">
                <VideoThumbnail videoUrl={URL.createObjectURL(videoFile)}
                  thumbnailHandler={(thumbnail) => setThumbnails((prevThumbnails) => [...prevThumbnails, thumbnail,])}
                  snapshotAtTime={item} />
              </div>
            ))}
        </div>

        <div className="d-flex justify-content-between mt-2 overflow-hidden flex-wrap">
          {/* INPUT FILE SUBIR MINIATURA */}
          <div>
            <label htmlFor="file" className="label-file text-center text-white px-4 py-2 rounded cursor-pointer">Subir Miniatura</label>
            <input type="file" id="file" className="input-file" accept="image/*" onChange={handleImageFileChange} />
          </div>
          {thumbnails.map((item, index) => (
            <div key={index} className="cursor-pointer">
              <img className="rounded" width={130} height={74} src={item} alt={`Thumbnail ${index + 1}`} onClick={() => handleSelectThumbnail(item)} />
            </div>
          ))}
        </div>

        {selectedThumbnail && (
          <div className="mt-2">
            <p className="mb-1">Miniatura seleccionada</p>
            <img className="object-fit rounded border shadow bg-dark" width={150} height={84} src={selectedThumbnail} alt="Selected Thumbnail" />
          </div>
        )}
      </div>

      <div className="my-3">
        <h4>Details</h4>
        {/* <div className="d-flex flex-column">
          <label htmlFor="tags">Tags</label>
          <textarea className="form-control resize-none" name="tags" id="tags" maxLength={100} placeholder="Enter a comma after each tag" onChange={handleChange} value={formData.tags}></textarea>
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="category">Category</label>
          <select name="category" id="category" onChange={handleChange} value={formData.category}>
            <option value="">Select a category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
            <option value="category4">Category 4</option>
            <option value="category5">Category 5</option>
          </select>
        </div> */}
        <div>
          <label>Comentarios</label>
          <div className="d-flex gap-3">
            <div>
              <input id="comments-on" type="radio" name="comments" value="on" onChange={handleChange} checked={formData.comments === "on"} />
              <label htmlFor="comments-on">On</label>
            </div>
            <div>
              <input id="comments-off" type="radio" name="comments" value="off" onChange={handleChange} checked={formData.comments === "off"} />
              <label htmlFor="comments-off">Off</label>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-primary w-50" type="submit">Upload</button>
        <button className="btn btn-primary w-50" type="reset" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default FormVideo;
