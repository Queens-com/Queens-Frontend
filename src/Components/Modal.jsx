import React from 'react'

const Modal = ({ open, onClose, children }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div onClick={onClose} className={`${open ? 'visible' : 'invisible'} fixed inset-0 flex items-center justify-center bg-black/30`}>
      <div onClick={(e) => e.stopPropagation()} className={`${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'} w-[80vw] max-w-[35rem] bg-white rounded-xl shadow p-6 transition`}>
        {children || <p>No content</p>} 
      </div>
    </div>
  )
}

export default Modal
