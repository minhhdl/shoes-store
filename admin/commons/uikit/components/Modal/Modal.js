import React from 'react';
import cn from 'classnames';
import s from './Modal.scss';

class Modal extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { isOpen, onRequestClose, title, children } = this.props;
    return (
      <div className={cn(s["modal"], isOpen && s["active"])}>
        <div className={s["modal-backdrop"]} onClick={onRequestClose}></div>
        <div className={s["modal-content"]}>
          <div className={s["modal-header"]}>
            <h3>{title}</h3>
          </div>
          <div className={s["modal-body"]}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;