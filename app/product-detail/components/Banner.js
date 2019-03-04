import React from 'react';
import Link from 'next/link';
import { Container } from '../../components';
import style from '../Product.scss';

const Banner = ({ productName }) => (
  <div className={style.banner}>
    <Container>
      <div className={style.breadcumb}>
        <Link href="/" passHref>
          <a>Home</a>
        </Link>
        <span className={style.separater}>/</span>
        <Link href="/shop" passHref>
          <a>Shop</a>
        </Link>
        <span className={style.separater}>/</span>
        <span className={style.active}>{productName}</span>
      </div>
    </Container>
  </div>
);

export default Banner;

