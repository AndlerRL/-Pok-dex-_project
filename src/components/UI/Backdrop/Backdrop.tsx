import React from 'react';

import css from '../../../css/Backdrop.css';

const backdrop = (props: { show: boolean; cancel(): () => void }) => (
  props.show &&
    <div 
      onClick={props.cancel}
      className={css.Backdrop}></div>
);

export default backdrop;