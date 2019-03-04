import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery-no-icon.css';
import s from './PhotoGallery.scss';

const PhotoGallery = ({ images }) => (
  <ImageGallery
    items={images}
    showPlayButton={false}
    showFullscreenButton={false}
    showBullets={false}
    renderLeftNav={(onClick, disabled) => (
      <button
        disabled={disabled}
        onClick={onClick}
        autoWidth
        clear
        color="header"
        className={`${s.buttonNav} ${s.buttonNavLeft}`}
      >
        <i className="material-icons">chevron_left</i>
      </button>
    )}
    renderRightNav={(onClick, disabled) => (
      <button
        disabled={disabled}
        onClick={onClick}
        autoWidth
        clear
        color="header"
        className={`${s.buttonNav} ${s.buttonNavRight}`}
      >
        <i className="material-icons">chevron_right</i>
      </button>
    )}
    additionalClass="photoGallery"
  />
);

export default PhotoGallery;
