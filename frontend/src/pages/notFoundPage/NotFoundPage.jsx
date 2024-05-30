import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <>
            <h1 className="text-center">404 - Not Found</h1>
            <div className="text-center">
                <Link className="btn btn-outline-primary" to={'/'}>Volver a Home</Link>
            </div>
        </>
    )
}

export default NotFoundPage