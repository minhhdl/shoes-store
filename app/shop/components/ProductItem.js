import React from 'react';
import Link from 'next/link';
import style from '../Shop.scss';

const ProductItem = ({ name, cover, price, slug }) => (
  <div className={style.productItem}>
    <div className={style.image}>
      <img src={`${cover}`} alt={name} />
      <Link href={`/product/${slug}`} passHref>
        <a className={style.button}>View detail</a>
      </Link>
    </div>
    <Link href={`/product/${slug}`} passHref>
      <a><h4 className={style.name}>{name}</h4></a>
    </Link>
    <hr />
    <div className={style.info}>
      <span className={style.price}>${price}.00</span>
      <button>
        <i className="material-icons">add_shopping_cart</i>
      </button>
    </div>
  </div>
);

export default ProductItem;