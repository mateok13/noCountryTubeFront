import { useParams } from "react-router-dom"

const ListVideosByUser = () => {
    const { username } = useParams()

    return (
        <div>Pagina ListVideosByUser - Usuario: {username}</div>
    )
}

export default ListVideosByUser