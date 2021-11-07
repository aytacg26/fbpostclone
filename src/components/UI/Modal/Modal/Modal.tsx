import { createPortal } from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';
import ModalContainer from '../ModalContainer/ModalContainer';
import classes from './Modal.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  children: React.ReactNode;
  title?: string;
  buttonPosition?: 'action' | 'close';
  buttonIcon?: JSX.Element;
  showModal?: boolean;
  onAction?: () => void;
  onCloseModal?: () => void;
}

const Modal = ({
  children,
  title,
  buttonPosition,
  buttonIcon,
  showModal,
  onAction,
  onCloseModal,
}: IProps) => {
  const handleModalClose = () => {
    if (onCloseModal) {
      onCloseModal();
    }
  };

  const modal = (
    <div className={`${!showModal ? classes.HideModal : ''}`}>
      <Backdrop onClick={handleModalClose} />
      <ModalContainer
        title={title}
        buttonPosition={buttonPosition}
        buttonIcon={buttonIcon}
        onClick={handleModalClose}
        onAction={onAction}
      >
        {children}
      </ModalContainer>
    </div>
  );

  const modalRootEl = document.getElementById('modal-root');

  return modalRootEl ? createPortal(modal, modalRootEl) : null;
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
  buttonPosition: PropTypes.string,
  buttonIcon: PropTypes.element,
  showModal: PropTypes.bool,
  onCloseModal: PropTypes.func,
  onAction: PropTypes.func,
};

Modal.defaultProps = {
  title: 'Untitled Modal',
  buttonPosition: 'close',
  onAction: () => null,
  onCloseModal: () => null,
  showModal: false,
};
