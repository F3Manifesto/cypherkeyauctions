import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import xIcon from '../../assets/x-icon.png';
import React from 'react';
import { black, primary } from '../../utils/nounBgColors';

export const Backdrop: React.FC<{ onDismiss: () => void }> = props => {
  return <div className={classes.backdrop} onClick={props.onDismiss} />;
};

const ModalOverlay: React.FC<{
  title?: string;
  isEthereum?: boolean;
  content?: React.ReactNode;
  onDismiss: () => void;
}> = props => {
  const { title, content, isEthereum, onDismiss } = props;
  return (
    <div className={classes.modal} style={{ background: isEthereum ? black : primary }}>
      <button className={classes.closeButton} onClick={onDismiss}>
        <img src={xIcon} alt="Button to close modal" />
      </button>
      <h3 style={{ color: isEthereum ? primary : black }}>{title}</h3>
      <div className={classes.content} style={{ color: isEthereum ? primary : black }}>
        {content}
      </div>
    </div>
  );
};

const Modal: React.FC<{
  title?: string;
  isEthereum?: boolean;
  content?: React.ReactNode;
  onDismiss: () => void;
}> = props => {
  const { title, content, isEthereum, onDismiss } = props;
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
        />,
        document.getElementById('overlay-root')!,
      )}
    </>
  );
};

export default Modal;
