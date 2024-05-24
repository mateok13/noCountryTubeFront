import './Modal.css';

const Modal = ({ children, isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
      </div>
      <div className="modal-overlay" onClick={closeModal}></div>
    </div>
  );
};

export default Modal;