import './Modal.css';

// eslint-disable-next-line react/prop-types
const Modal = ({ children, isOpen, closeModal }) => {
  console.log('Modal render', { isOpen });
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

export default Modal;