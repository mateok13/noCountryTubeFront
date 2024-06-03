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
    <form className="form-control form text-white shadow" onSubmit={handleSubmit}>
      <div>
        <h4>Información General</h4>
        <input className="inputNoCountry mt-1 py-1" type="text" placeholder="Título" id="title" name="title" onChange={handleChange} value={formData.title} autoFocus />
        {errors ? <p className="text-danger">{errors.title}</p> : null}
        <textarea className="resize-none mt-1 inputNoCountry py-1" name="description" id="description" placeholder="Descripción" onChange={handleChange} value={formData.description}></textarea>
        {errors ? <p className="text-danger">{errors.description}</p> : null}
        <div className="d-flex flex-column mb-0">
          <p className="mt-0 mb-1">Video</p>
          <input ref={videoInputRef} className="form-control" type="file" accept="video/*" onChange={handleVideoFileChange} title="Subir Video" />
          {errors ? <p className="text-danger">{errors.video}</p> : null}
          {formData.video && generateThumbnails()}
          <div className="">
            {thumbnails.length > 0 && <p className="mt-0 mb-1">Seleccione una miniatura</p>}
            <div className="d-flex justify-content-between flex-wrap">
              {thumbnails.map((item, index) => (
                <div key={index} className="cursor-pointer rounded thumbnail-border mb-3 responsive">
                  <img className="rounded thumbnail-border " src={item} alt={`Thumbnail ${index + 1}`} onClick={() => handleSelectThumbnail(item)} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="d-flex overflow-hidden flex-wrap mt-0">
          {/* INPUT FILE SUBIR MINIATURA */}
          <div className="mb-2">
            <label htmlFor="file" className="label-file text-center px-4 rounded cursor-pointer">Subir Miniatura <i className="bi bi-cloud-arrow-up-fill fs-3 cloud"></i></label>
            <input type="file" id="file" className="input-file" accept="image/*" onChange={handleImageFileChange} />
          </div>
          {/* Miniatura seleccionada */}
          <div>
            {selectedThumbnail && (
              <div className="ms-15">
                <img className="object-fit rounded thumbnail-border thumbnail-selected" width={150} height={84} src={selectedThumbnail} alt="Selected Thumbnail" />
              </div>
            )}
          </div>
          {errors.thumbnail ? <p className="text-danger mx-auto mb-0">{errors.thumbnail}</p> : null}
        </div>
      </div>

      <div>
        <h4>Detalles</h4>
        <div>
          <div className="d-flex gap-3">
            <p className="my-0">Comentarios</p>
            <div>
              <input className="me-1 cursor-pointer" id="comments-on" type="radio" name="comments" value="true" onChange={handleChange} checked={formData.comments === true} />
              <label className="cursor-pointer" htmlFor="comments-on">Permitidos</label>
            </div>
            <div>
              <input className="me-1 cursor-pointer" id="comments-off" type="radio" name="comments" value="false" onChange={handleChange} checked={formData.comments === false} />
              <label className="cursor-pointer" htmlFor="comments-off">Bloqueados</label>
            </div>
          </div>
          <hr className="py-0 my-2" />
          <div className="d-flex gap-3">
            <p className="me-12">Visibilidad</p>
            <div>
              <input className="me-1 cursor-pointer" id="isPublic-on" type="radio" name="isPublic" value="true" onChange={handleChange} checked={formData.isPublic === true} />
              <label className="cursor-pointer" htmlFor="isPublic-on">Público</label>
            </div>
            <div>
              <input className="ms-6 me-1 cursor-pointer" id="isPublic-off" type="radio" name="isPublic" value="false" onChange={handleChange} checked={formData.isPublic === false} />
              <label className="cursor-pointer" htmlFor="isPublic-off">Privado</label>
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