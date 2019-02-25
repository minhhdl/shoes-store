import React from 'react';
import Link from 'next/link';
import { AppLayout, Row, Col, Container } from '../components';
import Banner from './components/Banner';
import style from './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <AppLayout>
        <div className={style.topBanner}>
          <Banner />
        </div>
        <div className={style.grid}>
          <div className={style.left} style={{ background: 'url(\'img/b1.jpg\') center no-repeat', backgroundSize: 'cover' }} />
          <div className={style.right}>
            <div className={style.paragraph}>
              <h3>Nike DOWNSHIFTER</h3>
              <p>
                Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.sed quia non numquam eius modi tempora incidunt ut labore et dolore .
              </p>
              <Link href="/shop" passHref>
                <a className={style.button}>
                  Shop now
                </a>
              </Link>
            </div>
            <div className={style.image} style={{ backgroundImage: 'url(\'img/b2.jpg\')' }} >
              <h3>Air force</h3>
            </div>
          </div>
        </div>
        <div className={style.grid}>
          <div className={style.left}>
            <div className={style.paragraph}>
              <h3>Sneakers</h3>
              <p>
                Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.sed quia non numquam eius modi tempora incidunt ut labore et dolore .
              </p>
              <Link href="/shop" passHref>
                <a className={style.button}>
                  Shop now
                </a>
              </Link>
            </div>
            <div className={style.image} style={{ backgroundImage: 'url(\'img/b3.jpg\')' }} >
              <h3>Air force</h3>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.image} style={{ backgroundImage: 'url(\'img/b4.jpg\')' }} >
              <h3>Air force</h3>
            </div>
            <div className={style.paragraph}>
              <h3>Nike DOWNSHIFTER</h3>
              <p>
                Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.sed quia non numquam eius modi tempora incidunt ut labore et dolore .
              </p>
              <Link href="/shop" passHref>
                <a className={style.button}>
                  Shop now
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.newsletter}>
          <Container>
            <Row>
              <Col md={6}>
                <h3>Sign up for Newsletter !</h3>
              </Col>
              <Col md={6}>
                <form>
                  <input type="text" placeholder="Enter your email..." />
                  <button type="submit">
                    Submit
                  </button>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </AppLayout>
    )
  }
}

export default Home;