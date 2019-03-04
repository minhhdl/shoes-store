import React from 'react';
import Link from 'next/link';
import { AppLayout, Row, Col, Container, PhotoGallery, Rating } from '../components';
import Banner from './components/Banner';
import ProductItem from './components/ProductItem';
import style from './Product.scss';

class Product extends React.Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const result = await fetch(`http://localhost:5000/api/products/${slug}`);
    const { data } = await result.json();
    data.product.images = data.product.images.map(item => ({ original: `/img/${item}`, thumbnail: `/img/${item}` }));
    return {
      product: data.product,
      featureProducts: data.featureProducts,
    }
  }
  render() {
    const { product, featureProducts } = this.props;
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
                      {product.salePrice ? (
                        <>
                          <span>${product.salePrice}</span>
                          <del className={style.prevPrice}>
                            ${product.price}
                          </del>
                        </>
                      ) : `$${product.price}`}
                    </span>
                    <Rating rate={product.rate} />
                    <div className={style.shortDesc} dangerouslySetInnerHTML={{ __html: product.shortDescription }} />
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