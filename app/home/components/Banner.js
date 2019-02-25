import React from 'react';
import Carousel from 'nuka-carousel';
import style from '../Home.scss';

const Banner = () => (
  <Carousel
    cellAlign="center"
    initialSlideHeight={633}
    swiping
    dragging
    renderCenterLeftControls={(props) => (
      <button
        className={style.carouselButton}
        onClick={props.previousSlide}
      >
        <i className="material-icons">chevron_left</i>
      </button>
      )}
    renderCenterRightControls={(props) => (
      <button
        className={style.carouselButton}
        onClick={props.nextSlide}
      >
        <i className="material-icons">chevron_right</i>
      </button>
      )}
    wrapAround
  >
    <div
      className={style.carouselItem}
      style={{ backgroundImage: 'url(\'/img/banner1.jpg\')' }}
    >
      <h3>Sneakers</h3>
      <p>See how good they feel.</p>
    </div>
    <div
      className={style.carouselItem}
      style={{ backgroundImage: 'url(\'/img/banner2.jpg\')' }}
    >
      <h3>Adidas</h3>
      <p>For All Walks of Life.</p>
    </div>
    <div
      className={style.carouselItem}
      style={{ backgroundImage: 'url(\'/img/banner3.jpg\')' }}
    >
      <h3>Nike</h3>
      <p>See how good they feel.</p>
    </div>
    <div
      className={style.carouselItem}
      style={{ backgroundImage: 'url(\'/img/banner4.jpg\')' }}
    >
      <h3>Heels</h3>
      <p>For All Walks of Life.</p>
    </div>
  </Carousel>
);

export default Banner;

