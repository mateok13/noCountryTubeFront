import { useParams } from "react-router-dom"
import UserVideos from "../../components/userVideos/UserVideos"

const ListVideosByUser = () => {
    const { username } = useParams()

    return (
        <UserVideos username={username} />
    )
}

export default ListVideosByUser