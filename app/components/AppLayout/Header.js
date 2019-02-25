import React from 'react';
import { Container, Row, Col } from '../Grid';
import style from './Header.scss';

const Header = () => (
  <header className={style.header}>
    <Container>
      <div className={style.headerContainer}>
        <div className={style.logo}>
          <h2><a href="/"><span>Downy</span> Shoes</a></h2>
        </div>
        <div className={style.right}>
          <button className={style.button}>
            <i className="material-icons">shopping_cart</i>
          </button>
          <button className={style.button}>
            <i className="material-icons">search</i>
          </button>
          <button className={style.button}>
            <i className="material-icons">menu</i>
          </button>
        </div>
      </div>
    </Container>
  </header>
);

export default Header;