import React from 'react';
import styles from './Lightbox.module.css';
import Image from 'next/image';

const Lightbox = ({ stateModal, src, student, ano, desc }) => {
  let className = '';

  if (stateModal) {
    className = 'modal is-active';
  } else {
    className = 'modal';
  }
  return (
    <div className={className}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <Image
            src="/assets/logonegro.svg"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width={124}
            height={40}
          />
        </header>
        <section className="modal-card-body">
          <div className="Content">
            <div>
              <figure className={`${styles['figurecontainer']}`}>
                <Image
                  src={src}
                  alt="Placeholder image"
                  width={1200}
                  height={900}
                />
              </figure>
            </div>
            <div className="has-text-centered">
              <h1>{student}</h1>
              <p>Diseño - {ano} - 2021</p>
              <p>{desc}</p>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot"></footer>
      </div>
    </div>
  );
};

export default Lightbox;
