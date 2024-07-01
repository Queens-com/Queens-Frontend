import React from 'react';

const Modal = ({ open, onClose, children }) => {
  return (
    <div onClick={onClose} className={`fixed inset-0 flex items-center justify-center bg-black/30 transition ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}>
      <div onClick={(e) => e.stopPropagation()} className={`w-[80vw] max-w-[35rem] bg-white rounded-xl shadow p-6 transform transition-all ${open ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
        {children || <p>No content</p>}
      </div>
    </div>
  );
};

export default Modal;
