import { useParams } from "react-router-dom"
import UserVideos from "../../components/userVideos/UserVideos"

const ListVideosByUser = () => {
    const { usernameChannel } = useParams()

    return (
        <>
            <UserVideos username={usernameChannel} />
            {/* <UserVideos /> */}
        </>
    )
}

export default ListVideosByUser