import React from 'react';
import LazyImage from './lazy-image.jsx';
import styles from './card-styles.css';

const Card = ({ id, title, thumbnailUrl, className }) => (
  <div key={id} className={`${styles.card} ${className}`}>
    <h3>{title}</h3>
    <LazyImage url={thumbnailUrl} alt={title} className={styles.image} />
  </div>
);

export default Card;
