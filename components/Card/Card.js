import React, { useState } from 'react';
import styles from './Card.module.css';
import Image from 'next/image';
import Lightbox from '../Lightbox/Lightbox';

const Card = ({title, student, img, ano, desc, catDescription}) => {
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
            <div className={`${styles['favs']}`}>
              <span className={`tag ${styles['tagg']}`}>{catDescription}</span>
              <Image
                src="/assets/nofavorito.svg"
                alt="Agregar a Favoritos"
                width={30}
                height={30}
              />
            </div>
            <p className={`title is-4 ${styles['title']}`}>{title}</p>
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
