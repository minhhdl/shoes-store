import React from 'react';
import { Container, Row, Col } from '../Grid';
import style from './Footer.scss';

const Footer = () => (
  <footer className={style.footer}>
    <Container>
      <Row>
        <Col md={4}>
          <h2>
            <a href="/" className={style.logo}>
              Downy Shoes
            </a>
          </h2>
          <p className={style.appDesc}>
            Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
          </p>
        </Col>
        <Col md={4}>
          <h4 className={style.linkTitle}>
            Our <span>Information</span>
          </h4>
          <ul className={style.links}>
            <li className={style.link}><a href="#">Home</a></li>
            <li className={style.link}><a href="#">About</a></li>
            <li className={style.link}><a href="#">Services</a></li>
            <li className={style.link}><a href="#">Contact</a></li>
          </ul>
        </Col>
        <Col md={4}>
          <h4 className={style.linkTitle}>
            Store <span>Information</span>
          </h4>
          <ul className={style.info}>
            <li className={style.infoItem}>
              <i className="material-icons">phone</i>
              <span className={style.itemContent}>
                <span className={style.itemLabel}>Phone number</span>
                <span className={style.itemValue}>+1 234 567 8901</span>
              </span>
            </li>
            <li className={style.infoItem}>
              <i className="material-icons">email</i>
              <span className={style.itemContent}>
                <span className={style.itemLabel}>Email</span>
                <span className={style.itemValue}>downystore@gmail.com</span>
              </span>
            </li>
            <li className={style.infoItem}>
              <i className="material-icons">place</i>
              <span className={style.itemContent}>
                <span className={style.itemLabel}>Location</span>
                <span className={style.itemValue}>Broome St, NY 10002,California, USA.</span>
              </span>
            </li>
          </ul>
        </Col>
      </Row>
      <div className={style.copyright}>
        © 2018 Downy Shoes. All rights reserved
      </div>
    </Container>
  </footer>
);

export default Footer;