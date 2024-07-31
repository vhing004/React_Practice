function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          <h2>{header ? header : "Custom Header"}</h2>
        </div>
        <div className="body">{body ? body : "Custom Body Content"}</div>
        <div className="footer">{footer ? footer : "Footer"}</div>
      </div>
    </div>
  );
}

export default Modal;
