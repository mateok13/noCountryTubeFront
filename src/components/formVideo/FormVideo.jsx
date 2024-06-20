import useFormVideo from "../../hooks/useFormVideo";
import Spinner from 'react-bootstrap/Spinner';
import Modal from '../modal/Modal.jsx'
import images from '../../assets/image/image'
import "./FormVideo.css";

const FormVideo = () => {
  const {
    formData,
    errors,
    videoInputRef,
    miniatures,
    selectedMiniature,
    handleSubmit,
    handleChange,
    handleImageFileChange,
    handleVideoFileChange,
    handleSelectThumbnail,
    handleCancel,
    isLoading,
    generateThumbnails,
    isModalMessageOpen,
    closeModalMessage
  } = useFormVideo();

  const spinnerVideo = (
    <div className="d-flex justify-content-center align-items-center gap-2">
      <Spinner animation="border" role="status" size="sm"></Spinner><span>Subiendo...</span>
    </div>
  )

  const handleNewVideoSelected = (e) => {
    handleVideoFileChange(e); // Actualiza el estado con el nuevo archivo de video
    generateThumbnails(e.target.files[0]); // Genera las miniaturas pasando el nuevo archivo de video
  };

  return (
    <form className="form-control form text-white shadow pt-3" onSubmit={handleSubmit}>
      <div>
        <h4>Información General</h4>
        <input disabled={isLoading} className="inputNoCountry mt-1 py-1" type="text" placeholder="Título" id="title" name="title" onChange={handleChange} value={formData.title} autoFocus />
        {errors ? <p className="text-danger">{errors.title}</p> : null}
        <textarea disabled={isLoading} className="resize-none mt-1 inputNoCountry py-1" name="description" id="description" placeholder="Descripción" onChange={handleChange} value={formData.description}></textarea>
        {errors ? <p className="text-danger">{errors.description}</p> : null}
        <div className="d-flex flex-column mb-0">
          <p className="mt-0 mb-1">Video</p>
          <input disabled={isLoading} ref={videoInputRef} className="form-control" type="file" accept="video/*" onChange={handleNewVideoSelected} title="Subir Video" />
          {errors ? <p className="text-danger">{errors.video}</p> : null}
          <div>
            {miniatures.length > 0 && <p className="mt-0 mb-1">Seleccione una miniatura</p>}
            <div className="d-flex justify-content-between flex-wrap">
              {miniatures.map((item, index) => (
                <div key={index} className="cursor-pointer rounded thumbnail-border mb-3">
                  <img className={`rounded thumbnail-border ${isLoading ? 'pointer-events-none' : ''}`} src={item} alt={`Thumbnail ${index + 1}`} onClick={() => handleSelectThumbnail(item)} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="d-flex overflow-hidden flex-wrap mt-0">
          {/* INPUT FILE SUBIR MINIATURA */}
          <div className="mb-2">
            <label htmlFor="file" className="label-file text-center px-4 rounded cursor-pointer">Subir Miniatura <i className="bi bi-cloud-arrow-up-fill fs-3 cloud"></i></label>
            <input disabled={isLoading} type="file" id="file" className="input-file" accept="image/*" onChange={handleImageFileChange} />
          </div>
          {/* Miniatura seleccionada */}
          <div>
            {selectedMiniature && (
              <div className="ms-15">
                <img className="object-fit rounded thumbnail-border thumbnail-selected" width={150} height={84} src={selectedMiniature} alt="Selected Thumbnail" />
              </div>
            )}
          </div>
          {errors.miniature ? <p className="text-danger mx-auto mb-0">{errors.miniature}</p> : null}
        </div>
      </div>

      <div>
        <h4>Detalles</h4>
        <div>
          <div className="d-flex gap-3">
            <p className="my-0">Comentarios</p>
            <div>
              <input disabled={isLoading} className="me-1 cursor-pointer" id="comments-on" type="radio" name="isCommentable" value="true" onChange={handleChange} checked={formData.isCommentable === true} />
              <label className="cursor-pointer" htmlFor="comments-on">Permitidos</label>
            </div>
            <div>
              <input disabled={isLoading} className="me-1 cursor-pointer" id="comments-off" type="radio" name="isCommentable" value="false" onChange={handleChange} checked={formData.isCommentable === false} />
              <label className="cursor-pointer" htmlFor="comments-off">Bloqueados</label>
            </div>
          </div>
          <hr className="py-0 my-2" />
          <div className="d-flex gap-3">
            <p className="me-12">Visibilidad</p>
            <div>
              <input disabled={isLoading} className="me-1 cursor-pointer" id="isPublic-on" type="radio" name="isPublic" value="true" onChange={handleChange} checked={formData.isPublic === true} />
              <label className="cursor-pointer" htmlFor="isPublic-on">Público</label>
            </div>
            <div>
              <input disabled={isLoading} className="ms-6 me-1 cursor-pointer" id="isPublic-off" type="radio" name="isPublic" value="false" onChange={handleChange} checked={formData.isPublic === false} />
              <label className="cursor-pointer" htmlFor="isPublic-off">Privado</label>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex gap-2">
        <button disabled={isLoading} className='buttonNoCountry w-50' type="submit">{isLoading ? spinnerVideo : 'Subir Video'}</button>
        <button className="buttonNoCountry w-50" type="reset" onClick={handleCancel}>Cancelar</button>
      </div>

      <Modal isOpen={isModalMessageOpen} closeModal={closeModalMessage} className='bg-white'>
        <div className='px-4 py-11'>
          <div className='d-flex justify-content-start'>
            <img width={100} src={images.LogoNoCountryTube} alt="" />
          </div>
          <hr className='my-2' />
          <p>Muy bien! Tu video se ha subido exitosamente.</p>
          <div className='d-flex justify-content-end gap-2'>
            <button className='buttonNoCountry py-1 text-lowercase text-capitalize' onClick={closeModalMessage}>Aceptar</button>
          </div>
        </div>
      </Modal>
    </form>
  );
};

export default FormVideo;