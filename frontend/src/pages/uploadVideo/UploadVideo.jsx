import FormVideo from "../../components/formVideo/FormVideo";

const UploadVideo = () => {
  return (
    <div className='container-fluid d-flex flex-column align-items-center justify-content-top min-vh-100' style={{marginTop: '90px'}} >
      <div className='row w-100'>
        <div className='mx-auto col-sm-12 col-md-5 col-lg-5'>
          <FormVideo />
        </div>
      </div>
    </div >
  )
}

export default UploadVideo;