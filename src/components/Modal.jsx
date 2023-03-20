import { useEffect } from 'react';
import { Modal } from './Modal.styled';

export const Modal = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggelModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  };

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
        <img src={largeImg} alt={user} />
      </ModalWindow>
    </Overflow>,
    modalRef
  );
};
