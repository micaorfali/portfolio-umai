import React from 'react';
import styles from '../CardRounded/CardRounded.module.css';
import Image from 'next/image';

const CardRounded = ({ img, name, rol }) => {
  return (
    <div className={`image mx-auto my-0 ${styles['container']}`}>
      <Image
        className={`is-rounded ${styles['img']}`}
        src={img}
        alt="Placeholder image"
        height={256}
        width={256}
      />
      <div className={`is-rounded ${styles['middle']}`}>
        <div className={`${styles['text']}`}>{name}</div>
        <div className={`${styles['text2']}`}>{rol}</div>
      </div>
    </div>
  );
};

export default CardRounded;
