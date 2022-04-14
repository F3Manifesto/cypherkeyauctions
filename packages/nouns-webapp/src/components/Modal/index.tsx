import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import YellowClose from '../../assets/yellow-close.png';
import BlueClose from '../../assets/blue-close.png';
import React from 'react';
import { black, primary, white } from '../../utils/nounBgColors';

export const Backdrop: React.FC<{ onDismiss: () => void }> = props => {
  return <div className={classes.backdrop} onClick={props.onDismiss} />;
};

const ModalOverlay: React.FC<{
  title?: string;
  isEthereum?: boolean;
  content?: React.ReactNode;
  onSuccess?: () => void;
  onDismiss: () => void;
}> = props => {
  const { title, content, isEthereum, onDismiss, onSuccess } = props;
  return (
    <div className={classes.modal} style={{ background: isEthereum ? white : primary }}>
      <button className={classes.closeButton} onClick={onDismiss}>
        <img src={isEthereum ? BlueClose : YellowClose} alt="Button to close modal" />
      </button>
      <h3 style={{ color: isEthereum ? primary : black }}>{title}</h3>
      <div className={classes.content} style={{ color: isEthereum ? primary : black }}>
        {content}
      </div>
      {!!onSuccess && (
        <button
          type="button"
          className={classes.confirm}
          style={{ background: isEthereum ? primary : black, color: isEthereum ? white : primary }}
          onClick={onSuccess}
        >
          {' '}
          Confirm{' '}
        </button>
      )}
    </div>
  );
};

const Modal: React.FC<{
  title?: string;
  isEthereum?: boolean;
  content?: React.ReactNode;
  onSuccess?: () => void;
  onDismiss: () => void;
}> = props => {
  const { title, content, isEthereum, onDismiss, onSuccess } = props;
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onDismiss={onDismiss} />,
        document.getElementById('backdrop-root')!,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          isEthereum={isEthereum}
          content={content}
          onDismiss={onDismiss}
          onSuccess={onSuccess}
        />,
        document.getElementById('overlay-root')!,
      )}
    </>
  );
};

export default Modal;
