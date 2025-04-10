// src/components/Card.js
import React from 'react';
import styles from '../css/Card.module.css';

function Card({ title, img, result }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <img src={img} alt="card" className={styles.image} />
      {result && <p className={styles.result}>{result}</p>}
    </div>
  );
}

export default Card;
