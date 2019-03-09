import React from 'react';
import Error from 'next/error';
import { AppLayout, Row, Col, Container } from '../components';
import Banner from './components/Banner';
import Filter from './components/Filter';
import ProductItem from './components/ProductItem';
import { API_URL } from '../constants';
import style from './Shop.scss';

class Shop extends React.Component {
  static async getInitialProps() {
    const result = await fetch(`${API_URL}/products`);
    const { products, status } = await result.json();
    if (status !== 200) {
      return {
        error: true,
        status,
      }
    }
    return {
      products,
    }
  }
  render() {
    const { products, error, status } = this.props;
    if (error) return <Error statusCode={status} />
    return (
      <AppLayout>
        <Banner />
        <div className={style.content}>
          <Container>
            <Row>
              <Col md={3}>
                <Filter />
              </Col>
              <Col md={9}>
                <div className={style.products}>
                  <div className={style.adsBanner}>
                    <div className={style.ads} style={{ backgroundImage: 'url(/img/banner3.jpg)' }}>
                      <span>40% off</span>
                    </div>
                    <div className={style.ads} style={{ backgroundImage: 'url(/img/banner2.jpg)' }}>
                      <span>50% off</span>
                    </div>
                  </div>

                  <div className={style.listProducts}>
                    <Row>
                      {products.map(product => (
                        <Col sm={6} md={4}>
                          <ProductItem {...product} />
                        </Col>
                      ))}
                    </Row>
                  </div>

                  <div className={style.adsBanner}>
                    <div className={style.ads} style={{ backgroundImage: 'url(/img/banner3.jpg)' }}>
                      <span>40% off</span>
                    </div>
                    <div className={style.ads} style={{ backgroundImage: 'url(/img/banner2.jpg)' }}>
                      <span>50% off</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </AppLayout>
    )
  }
}

export default Shop;