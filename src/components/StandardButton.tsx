import React from 'react';
import { type StandardButtonProps } from '../types';

const StandardButton: React.FC<StandardButtonProps> = ({
  BGcolor,
  icon,
  title,
  btnType,
  onClick,
  className = ''
}) => {

  if (btnType === "iconButton") {
    return (
      <button
        className={`btn btn-${BGcolor} ${className}`}
        onClick={onClick}
        title={title}
      >
        <i className={`bi bi-${icon}`}></i>
      </button>
    );
  }


  return (
    <button
      className={`btn btn-${BGcolor} ${className}`}
      onClick={onClick}
      title={title}
    >
      {title}
    </button>
  );
};

export default StandardButton;
