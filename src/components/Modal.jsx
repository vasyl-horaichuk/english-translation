import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overflow, ModalWindow } from './Modal.styled';
import { AddWordsForm } from './AddWordsForm';
const modalRef = document.querySelector('#modal-root');

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const onCloseByEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onCloseByEsc);

    return () => {
      window.removeEventListener('keydown', onCloseByEsc);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overflow onClick={handleBackdropClick}>
      <ModalWindow>
        <AddWordsForm />
      </ModalWindow>
    </Overflow>,
    modalRef
  );
};
