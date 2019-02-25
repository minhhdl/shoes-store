import React from 'react';
import { Container } from '../../components';
import style from '../Shop.scss';

const Filter = () => (
  <div className={style.filter}>
    <div className={style.section}>
      <h4 className={style.title}>Search here...</h4>
      <div className={style.body}>
        <div className={style.search}>
          <input type="text" placeholder="Product name..." />
          <button>
            <i className="material-icons">search</i>
          </button>
        </div>
      </div>
    </div>
    <div className={style.section}>
      <h4 className={style.title}>Occasion</h4>
      <div className={style.body}>
        <form>
          <label htmlFor="casuals" className={style.checkbox}>
            <input type="checkbox" id="casuals" />
            Casuals
          </label>
          <label htmlFor="party" className={style.checkbox}>
            <input type="checkbox" id="party" />
            Party
          </label>
          <label htmlFor="wedding" className={style.checkbox}>
            <input type="checkbox" id="wedding" />
            Wedding
          </label>
          <label htmlFor="ethnic" className={style.checkbox}>
            <input type="checkbox" id="ethnic" />
            Ethnic
          </label>
        </form>
      </div>
    </div>
    <div className={style.section}>
      <h4 className={style.title}>Discount</h4>
      <div className={style.body}>
        <form>
          <label htmlFor="discount-5" className={style.checkbox}>
            <input type="checkbox" id="discount-5" />
            5% or more
          </label>
          <label htmlFor="discount-10" className={style.checkbox}>
            <input type="checkbox" id="discount-10" />
            10% or more
          </label>
          <label htmlFor="discount-20" className={style.checkbox}>
            <input type="checkbox" id="discount-20" />
            20% or more
          </label>
          <label htmlFor="discount-50" className={style.checkbox}>
            <input type="checkbox" id="discount-50" />
            50% or more
          </label>
        </form>
      </div>
    </div>
  </div>
);

export default Filter;

