import React from 'react';
import styles from './Subtitle.module.css';

const Subtitle = ({ children }) => {
  return (
    <div className="is-widescreen has-text-centered">
      <h1 className={`subtitle is-4 ${styles['container']}`}>{children}</h1>
    </div>
  );
};

export default Subtitle;
