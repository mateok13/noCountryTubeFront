import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ children, isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modalContainer">
      <div className="modalContent">
        {children}
      </div>
      <div className="modalOverlay" onClick={closeModal}></div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;