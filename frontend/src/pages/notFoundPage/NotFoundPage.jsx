import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="container min-vh-100 d-flex flex-column justify-content-center gap-4">
            <h1 className="text-center text-white">404 - Not Found</h1>
            <div className="text-center">
                <Link className="buttonNoCountry text-decoration-none" to={'/'}>Volver a NoCountryTube</Link>
            </div>
        </div>
    )
}

export default NotFoundPage