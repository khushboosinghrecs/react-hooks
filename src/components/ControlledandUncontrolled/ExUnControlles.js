// An example of an uncontrolled component is a modal window, where the state of the modal (open or closed) is managed internally by the component itself. Here, the modal component uses a ref to access the DOM element and update the state accordingly.

import React, { useState, useRef, useEffect } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button type="button" onClick={handleOpenModal}>
        Open Modal
      </button>
      {isOpen && (
        <div ref={modalRef}>
          <button type="button" onClick={handleCloseModal}>
            Close Modal
          </button>
          <p>Modal Content</p>
        </div>
      )}
    </div>
  );
};

export default Modal;
