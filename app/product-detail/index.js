import React from 'react';
import Link from 'next/link';
import Error from 'next/error';
import { AppLayout, Row, Col, Container, PhotoGallery, Rating } from '../components';
import Banner from './components/Banner';
import ProductItem from './components/ProductItem';
import { API_URL } from '../constants';
import style from './Product.scss';

class Product extends React.Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const result = await fetch(`${API_URL}/products/detail/${slug}`);
    const { status, product, featureProducts } = await result.json();
    if (status !== 200) {
      return {
        error: true,
        status,
      }
    }
    product.images = product.images.map(item => ({ original: `/img/${item}`, thumbnail: `/img/${item}` }));
    return {
      product,
      featureProducts,
    }
  }
  render() {
    const { product, featureProducts, error, status } = this.props;
    if (error) return <Error statusCode={status} />
    return (
      <AppLayout>
        <Banner productName={product.name} />
        <div className={style.content}>
          <Container>
            <div className={style.products}>
              <Row>
                <Col md={5}>
                  <PhotoGallery images={product.images} />
                </Col>
                <Col md={7}>
                  <div className={style.product}>
                    <h3>{product.name}</h3>
                    <span className={style.price}>
                      {product.sale_price ? (
                        <>
                          <span>${product.sale_price}</span>
                          <del className={style.prevPrice}>
                            ${product.price}
                          </del>
                        </>
                      ) : `$${product.price}`}
                    </span>
                    <Rating rate={product.rate} />
                    <div className={style.shortDesc} dangerouslySetInnerHTML={{ __html: product.short_description }} />
                    <button className={style.addToCart}>
                      Add to cart
                    </button>
                  </div>
                </Col>
              </Row>
              <div className={style.detail}>
                <div className={style.tabs}>
                  <span className={style.tab}>Detail description</span>
                </div>
                <div className={style.detailContent} dangerouslySetInnerHTML={{ __html: product.description }} />
              </div>
              <div className={style.listProducts}>
                <h3>Featured Products</h3>
                <Row>
                  {featureProducts.map(product => (
                    <Col sm={6} md={3}>
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
          </Container>
        </div>
      </AppLayout>
    )
  }
}

export default Product;