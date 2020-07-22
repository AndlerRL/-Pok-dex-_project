import React from 'react';

const icons = (props: { size: string; type: string; icon: string }) => {
  const iconConfig = [props.size, props.type, 'fa-' + props.icon];

  return (
    <i className={iconConfig.join(' ')}></i>
  )
}

export default icons;

