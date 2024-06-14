import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import NavBar from "../navBar/NavBar"

function Layout({ children }) {
    const navigate = useNavigate();
    return (
        <>
            <NavBar navigate={navigate} />
            <div>{children}</div>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout