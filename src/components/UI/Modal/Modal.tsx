import React from 'react';

import Backdrop from '../Backdrop/Backdrop';

import css from './Modal.css';

const modal = (props: { modalClosed(): () => void; show: boolean; children: React.ReactChild }) => (
  <React.Fragment>
    <Backdrop
      cancel={props.modalClosed}
      show={props.show} />
    <div 
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-120vh)',
        opacity: props.show ? '1' : '0'
      }}
      className={css.Modal}>
      {props.children}
    </div>
  </React.Fragment>
);

export default React.memo(modal);