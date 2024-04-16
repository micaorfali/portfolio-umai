import React from 'react';
import styles from './Title.module.css';

const Title = ({ children }) => {
  return (
    <div className="is-widescreen has-text-centered">
      <h1 className={`title is-2 ${styles['container']}`}>{children}</h1>
    </div>
  );
};

export default Title;
