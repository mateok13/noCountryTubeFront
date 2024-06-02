import useFormVideo from "../../hooks/useFormVideo";
import "./FormVideo.css";

const FormVideo = () => {
  const { formData,
    errors,
    videoInputRef,
    thumbnails,
    selectedThumbnail,
    handleSubmit,
    handleChange,
    handleImageFileChange,
    handleVideoFileChange,
    handleSelectThumbnail,
    handleCancel,
    generateThumbnails } = useFormVideo()

  return (
    <form className="form-control formNoCountry text-white shadow p-4" onSubmit={handleSubmit}>
      <div>
        <h4>Información General</h4>
        <input className="inputNoCountry" type="text" placeholder="Título" id="title" name="title" onChange={handleChange} value={formData.title} autoFocus />
        {errors ? <p className="text-danger">{errors.title}</p> : null}
        <textarea className="resize-none mt-2 inputNoCountry" name="description" id="description" placeholder="Descripción" onChange={handleChange} value={formData.description}></textarea>
        {errors ? <p className="text-danger">{errors.description}</p> : null}
        <div className="d-flex flex-column my-1">
          <label>Video</label>
          <input ref={videoInputRef} className="inputNoCountry" type="file" accept="video/*" onChange={handleVideoFileChange} title="Subir Video" />
          {errors ? <p className="text-danger">{errors.video}</p> : null}
          {formData.video && generateThumbnails()}
        </div>

        <div className="d-flex justify-content-between overflow-hidden flex-wrap gap-4-responsive pb-1">
          {/* INPUT FILE SUBIR MINIATURA */}
          <div className="mb-2">
            <label htmlFor="file" className="label-file text-center px-4 rounded cursor-pointer">Subir Miniatura <i className="bi bi-cloud-arrow-up-fill fs-3 cloud"></i></label>
            <input type="file" id="file" className="input-file" accept="image/*" onChange={handleImageFileChange} />
          </div>

          {thumbnails.map((item, index) => (
            <div key={index} className="cursor-pointer rounded thumbnail-border">
              <img className="rounded thumbnail-border " src={item} alt={`Thumbnail ${index + 1}`} onClick={() => handleSelectThumbnail(item)} />
            </div>
          ))}
          {errors.thumbnail ? <p className="text-danger mx-auto mb-0">{errors.thumbnail}</p> : null}
        </div>

        {selectedThumbnail && (
          <>
            <div className="mt-1">
              <p className="mb-1">Miniatura seleccionada</p>
              <img className="object-fit rounded bg-dark thumbnail-border" width={150} height={84} src={selectedThumbnail} alt="Selected Thumbnail" />
            </div>
          </>
        )}
      </div>

      <div className="my-3">
        <h4>Detalles</h4>
        <div className="">
          <div className="d-flex gap-3">
            <label>Comentarios</label>
            <div>
              <input className="me-1 cursor-pointer" id="comments-on" type="radio" name="comments" value="true" onChange={handleChange} checked={formData.comments === true} />
              <label htmlFor="comments-on cursor-pointer">Permitidos</label>
            </div>
            <div>
              <input className="me-1 cursor-pointer" id="comments-off" type="radio" name="comments" value="false" onChange={handleChange} checked={formData.comments === false} />
              <label htmlFor="comments-off cursor-pointer">Bloqueados</label>
            </div>
          </div>
          <hr className="py-0 my-2" />
          <div className="d-flex gap-3">
            <label className="me-12">Visibilidad</label>
            <div>
              <input className="me-1 cursor-pointer" id="isPublic-on" type="radio" name="isPublic" value="true" onChange={handleChange} checked={formData.isPublic === true} />
              <label htmlFor="isPublic-on cursor-pointer">Público</label>
            </div>
            <div>
              <input className="ms-6 me-1 cursor-pointer" id="isPublic-off" type="radio" name="isPublic" value="false" onChange={handleChange} checked={formData.isPublic === false} />
              <label htmlFor="isPublic-off cursor-pointer">Privado</label>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex gap-2">
        <button className="buttonNoCountry w-50" type="submit">Subir Video</button>
        <button className="buttonNoCountry w-50" type="reset" onClick={handleCancel}>Cancelar</button>
      </div>
    </form>
  );
};

export default FormVideo;