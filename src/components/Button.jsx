// src/components/Button.js
import React from 'react';
import styles from '../css/Button.module.css';

function Button({ children, onClick, className }) {
  return (
    <button className={`${styles.btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
