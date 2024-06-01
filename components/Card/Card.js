import React, { useState } from 'react';
import styles from './Card.module.css';
import Image from 'next/image';
import Lightbox from '../Lightbox/Lightbox';

const Card = ({ title, student, img, ano, desc, catDescription }) => {
  const [stateModal, setStateModal] = useState(false);

  const changeStateModal = () => {
    if (stateModal) {
      setStateModal(false);
    } else if (!stateModal) {
      setStateModal(true);
    }
  };

  return (
    <div className={`card ${styles['container']}`}>
      <div>
        <figure className={`${styles['figurecontainer']}`}>
          <Image src={img} alt="Placeholder image" width={1200} height={900} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <span className={`tag ${styles['tagg']}`}>{catDescription}</span>

            <p
              className={`title is-4 ${styles['title']}`}
              style={{
                whiteSpace: 'nowrap',
                width: '90%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {title}
            </p>
          </div>
        </div>
        <div onClick={() => changeStateModal()}>
          <Lightbox
            changeStateModal={changeStateModal}
            stateModal={stateModal}
            src={img}
            student={student}
            ano={ano}
            desc={desc}
          />
          <a className={`button ${styles['boton']}`}>VER</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
