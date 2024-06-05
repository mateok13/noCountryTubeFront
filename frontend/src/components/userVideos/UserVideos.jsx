// import PropTypes from 'prop-types';
import { useState } from 'react'
import UserVideosExample from './ejemploListadoUserVideos.json'
import './userVideos.css'
import VideoCardByUser from '../videoCardByUser/VideoCardByUser'

const UserVideos = () => { //{usernameChannel} SI usernameChannel == username (localStorage) ? MOSTRAR DROPDOWN : NO MOSTRARLO
    const listadoVideos = UserVideosExample
    const [isSubscribe, setIsSubscribed] = useState(true)
    const listTitles = ['Mis Videos', 'Shorts', 'Playlists', 'Suscripciones']
    const [selectedTitle, setSelectedTitle] = useState(0)
    console.log(listadoVideos)

    return (
        <div className='container mt-10 text-center text-white'>
            {/* Aqui listar los videos de {username} */}
            <div className='width-info mx-auto d-flex justify-content-center gap-3'>
                <img className='img-avatar user-select-none' src="https://megaport.hu/media/king-include/uploads/2023/10/906363-female-avatar-profile-picture-013.jpg" alt="" />
                <div className='text-start'>
                    <h1 className='shadow-white'>User Example</h1>
                    <p>@userExample | 3 suscriptores | 6 videos</p>
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
                    <form className='search-container search-responsive p-0 mb-0'>
                        <span><i className="bi bi-search me-2"></i></span>
                        <input className='search-my-videos text-white bg-transparent' type="search" placeholder='Buscar en mis videos...' />
                    </form>
                </div>
                <hr className='mb-4 bar-divider' />
                <div className=" gap-3 container px-0 d-flex align-items-start flex-wrap pb-4 responsive">
                    {listadoVideos.map((item) => (
                        <VideoCardByUser key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

// UserVideos.propTypes = {
//     username: PropTypes.string.isRequired,
// }

export default UserVideos