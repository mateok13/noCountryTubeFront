import PropTypes from 'prop-types';

const UserVideos = ({ username }) => {
    return (
        <div className='text-center text-white'>Aqui listar los videos de {username}</div>
    )
}

UserVideos.propTypes = {
    username: PropTypes.string.isRequired,
}

export default UserVideos