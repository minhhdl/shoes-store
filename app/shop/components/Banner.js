import React from 'react';
import Link from 'next/link';
import { Container } from '../../components';
import style from '../Shop.scss';

const Banner = () => (
  <div className={style.banner}>
    <Container>
      <div className={style.breadcumb}>
        <Link href="/" passHref>
          <a>Home</a>
        </Link>
        <span className={style.separater}>/</span>
        <span className={style.active}>Shop</span>
      </div>
    </Container>
  </div>
);

export default Banner;

