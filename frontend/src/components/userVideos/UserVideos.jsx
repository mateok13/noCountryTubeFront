import { useState } from 'react'
import PropTypes from 'prop-types'
import UserVideosExample from './ejemploListadoUserVideos.json'
import VideoCardByUser from '../videoCardByUser/VideoCardByUser'
import Modal from '../modal/Modal.jsx'
import images from '../../assets/image/image'
import Avatar from '../../assets/image/avatar.png'
import './userVideos.css'

const UserVideos = ({ usernameChannel }) => { //{usernameChannel} SI usernameChannel == username (localStorage) ? MOSTRAR DROPDOWN : NO MOSTRARLO
    const [allVideos, setAllVideos] = useState(UserVideosExample)
    const [listadoVideos, setListadoVideos] = useState(UserVideosExample)
    const [word, setWord] = useState('')
    const [isSubscribe, setIsSubscribed] = useState(true)
    const listTitles = ['Mis Videos', 'Shorts', 'Playlists', 'Suscripciones']
    const [selectedTitle, setSelectedTitle] = useState(0)
    const [videoId, setVideoId] = useState(null)
    const [isModalMessageOpen, setIsModalMessageOpen] = useState(false);

    const openModalMessage = () => {
        setIsModalMessageOpen(true);
    };

    const closeModalMessage = () => {
        setIsModalMessageOpen(false);
    };

    const searchUserVideos = (value) => {
        setWord(value)
        if (!value) {
            setListadoVideos(allVideos)
        } else {
            let foundVideos = allVideos.filter(item =>
                item.title.toLowerCase().startsWith(value.toLowerCase()) ||
                item.title.toLowerCase().includes(value.toLowerCase())
            )
            setListadoVideos(foundVideos)
        }
    }

    const confirmDeleteVideo = () => {
        const updatedVideos = allVideos.filter(item => item.id !== videoId)
        setAllVideos(updatedVideos)
        searchUserVideos(word)
        closeModalMessage()
    }

    const deleteVideo = (videoId) => {
        setVideoId(videoId)
        // axios.delete(`${environment.url}videos?id=${videoId}`)
        //   .then(response => {
        //     console.log(response.data)
        //     alert('eliminado')
        //   })
        //   .catch(error => console.log(error.message))
        // let confirmDelete = confirm('Esta seguro de que quiere eliminar este video?')
        openModalMessage()
    }

    return (
        <div className='container mt-10 text-center text-white'>
            {/* Aqui listar los videos de {username} */}
            <div className='width-info mx-auto d-flex justify-content-center gap-3'>
                <img className='img-avatar user-select-none' src={Avatar} alt="" />
                <div className='text-start'>
                    <h1 className='shadow-white'>{usernameChannel}</h1>
                    <p>@{usernameChannel} | 3 suscriptores | 6 videos</p>
                    <p>Bienvenidos a mi canal oficial. Aquí encontrarás entrevistas, experiencias y los mejores proyectos de NoCountry; así como también las últimas noticias relacionadas a cada simulación laboral.</p>
                    <span className='buttonNoCountry rounded-5 px-3 py-1 fs-9 text-capitalize' onClick={() => setIsSubscribed(!isSubscribe)}>{isSubscribe ? 'Suscribirse' : 'Cancelar Suscripción'}</span>
                </div>
            </div>

            <div className='mt-4'>
                <div className='d-flex flex-wrap invert-order justify-content-between align-items-end align-items-responsive responsive'>
                    <div className='d-flex gap-4'>
                        {
                            listTitles.map((title, index) => (
                                <h6 key={index} className={`m-0 pb-1 user-select-none cursor-pointer ${selectedTitle == index ? 'selected-title' : ''}`} onClick={() => setSelectedTitle(index)}>{title}</h6>
                            ))
                        }
                    </div>
                    <div className='search-container search-responsive p-0 mb-0'>
                        <span><i className="bi bi-search me-2"></i></span>
                        <input value={word} className='search-my-videos text-white bg-transparent' type="search" placeholder='Buscar en mis videos...' onChange={e => searchUserVideos(e.target.value)} />
                    </div>
                </div>
                <hr className='mb-4 bar-divider' />
                <div className=" gap-3 container px-0 d-flex align-items-start flex-wrap pb-4 responsive">
                    {
                        listadoVideos.length == 0 ?
                            <p className='text-center mx-auto'>No se encontraron resultados</p>
                            :
                            listadoVideos.map((item) => (
                                <VideoCardByUser key={item.id} item={item} deleteVideo={deleteVideo} />
                            ))}
                </div>
            </div>

            <Modal isOpen={isModalMessageOpen} closeModal={closeModalMessage} className='bg-white'>
                <div className='px-4 py-11'>
                    <div className='d-flex justify-content-start'>
                        <img width={100} src={images.LogoNoCountryTube} alt="" />
                    </div>
                    <hr className='my-2' />
                    <p>¿Estás seguro de que quieres eliminar este video?</p>
                    <div className='d-flex justify-content-end gap-2'>
                        <button className='buttonNoCountry py-1 text-lowercase text-capitalize' onClick={confirmDeleteVideo}>Aceptar</button>
                        <button className='buttonNoCountry py-1 text-lowercase text-capitalize' onClick={closeModalMessage}>Cancelar</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

UserVideos.propTypes = {
    usernameChannel: PropTypes.string.isRequired,
}

export default UserVideos
