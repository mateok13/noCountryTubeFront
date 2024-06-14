import { useEffect, useState } from 'react'
import { environment } from "../../hooks/environment";
import PropTypes from 'prop-types'
import VideoCardByUser from '../videoCardByUser/VideoCardByUser'
import Modal from '../modal/Modal.jsx'
import Spinner from 'react-bootstrap/Spinner';
import images from '../../assets/image/image'
import Avatar from '../../assets/image/avatar.png'
import axios from 'axios'
import './userVideos.css'

const UserVideos = ({ usernameChannel }) => {
    const [allVideos, setAllVideos] = useState([])
    const [listadoVideos, setListadoVideos] = useState([])
    const [word, setWord] = useState('')
    const [isSubscribe, setIsSubscribed] = useState(true)
    const listTitles = ['Mis Videos', 'Shorts', 'Playlists', 'Suscripciones']
    const [selectedTitle, setSelectedTitle] = useState(0)
    const [videoId, setVideoId] = useState(null)
    const [isModalMessageOpen, setIsModalMessageOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const token = localStorage.accessToken

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${environment.url}users/get-user-profile/${usernameChannel}`)
            .then(response => {
                const videos = response.data.data.videos
                setAllVideos(videos)
                setListadoVideos(videos)
            })
            .catch(error => console.log(error.message))
            .finally(() => setIsLoading(false))
    }, [usernameChannel])

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
        axios.delete(`${environment.url}videos/${videoId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data)
                const updatedVideos = allVideos.filter(item => item.id !== videoId);
                setAllVideos(updatedVideos);
                setListadoVideos(updatedVideos);
                closeModalMessage();
            })
            .catch(error => console.log(error.message))
    }

    const deleteVideo = (videoId) => {
        setVideoId(videoId)
        openModalMessage()
    }

    return (
        <div className='container mt-10 text-center text-white'>
            {/* Aqui listar los videos de {username} */}
            <div className='width-info mx-auto d-flex justify-content-center gap-3'>
                <img className='img-avatar user-select-none' src={usernameChannel == 'Vane' || usernameChannel == 'Vanessa' ? images.avatar2 : Avatar} alt="" />
                <div className='text-start'>

                    <h1 className='shadow-white'>{usernameChannel}</h1>
                    <p>@{usernameChannel} | 3 suscriptores | {listadoVideos?.length > 0 ? `${listadoVideos.length} Videos` : '0 Videos'}</p>
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
                <div className="gap-3 container px-0 d-flex align-items-start flex-wrap pb-4 responsive">
                    {
                        isLoading ?
                            <Spinner className="color-spinner text-center mx-auto"></Spinner>
                            :
                            !listadoVideos || listadoVideos.length == 0 ?
                                <p className='text-center mx-auto'>No se encontraron resultados</p>
                                :
                                listadoVideos?.map((item) => (
                                    <VideoCardByUser key={item.id} item={item} deleteVideo={deleteVideo} usernameChannel={usernameChannel} />
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