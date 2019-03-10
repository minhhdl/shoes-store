import React from 'react';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import { EditorState } from 'draft-js';
import { withRouter } from 'next/router';
import Head from 'next/head';
import cn from 'classnames';
import Toastr from 'toastr';
import {
  AppLayout, Button, Block, TextField, TextEditor,
  Row, Col, Checkbox, PhotoUploader,
} from '../../../commons/uikit';
import Request from '../../../commons/utils/request';
import authenticate from '../../../commons/utils/authenticate';
import { PRODUCTS_URL, S3_URL } from '../../../constants';
import * as ProductServices from './services';
import s from './Products.scss';

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      short_description: '',
      description: '',
      price: '',
      sale_price: '',
      images: [],
      editorState: null,
      canSubmit: true,
    };

    this.editor = React.createRef();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.startUpload = this.startUpload.bind(this);
  }

  async componentDidMount() {
    const { router } = this.props;
    const { id: productId } = router.query;
    
    if (productId) this.getProduct();

    this.uploadWidget = window.cloudinary.createUploadWidget({
      cloudName: 'izzilab', 
      uploadPreset: 'downyshoes'
    });
  }

  startUpload = async () => {
    cloudinary.openUploadWidget({
      cloudName: 'izzilab', 
      uploadPreset: 'downyshoes',
    }, (error, result) => {
      if (result && result.event === "success") {
        const { images } = this.state;
        images.push(result.info.url);
        this.setState({ images });
      }
    });
  }

  onEditorStateChange(editorState) {
    this.setState({ editorState });
  }

  getProduct = async () => {
    const { router } = this.props;
    const { id: productId } = router.query;
    const { product } = await ProductServices.getProduct(productId);
    const state = {
      id: product._id,
      name: product.name,
      cover: product.cover,
      images: product.images,
      price: product.price,
      sale_price: product.sale_price,
      short_description: product.short_description,
    };

    state.editorState = EditorState.createWithContent(stateFromHTML(product.description));

    this.setState(prevState => Object.assign({}, prevState, state));
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      id, editorState, name, images, cover,
      short_description, price, sale_price,
    } = this.state;
    const data = {
      name,
      short_description,
      price,
      sale_price,
      images,
      cover: cover || (images.length > 0 ? images[0] : null),
    };

    data.description = this.convertToHtml(editorState);

    let res;

    if (id) {
      res = await ProductServices.updateProduct(id, data);
    } else {
      res = await ProductServices.addProduct(data);
    }
    const { product } = res;

    if (product._id) {
      Toastr.success(`${id ? 'Update product' : 'Add new product'} successfully!`, 'Success!');
      window.location.href = PRODUCTS_URL;
    }
  }

  convertToHtml = (editorState) => {
    const options = {
      entityStyleFn: (entity) => {
        const entityType = entity.get('type').toLowerCase();
        if (entityType === 'image') {
          const data = entity.getData();
          const imgEl = global.document.querySelector(`img[src="${data.src}"]`);
          return {
            element: 'img',
            attributes: {
              src: data.src,
            },
            style: imgEl.style,
          };
        }
        if (entityType === 'link') {
          const data = entity.getData();
          return {
            element: 'a',
            attributes: {
              href: data.url,
              target: '_blank',
            },
          };
        }
        return null;
      },
    };
    const contentState = editorState.getCurrentContent();
    return stateToHTML(contentState, options);
  }

  handleUpload = async (files) => {
    const { images } = this.state;
    const data = new global.window.FormData();
    for (let i = 0; i < files.length; i += 1) {
      data.append('file', files[i]);
    }
    const result = await Request.upload(data);
    const { file } = result.files;
    file.map((item) => {
      images.push(item.name);
      return true;
    });
    this.setState({ images });
  }

  handleInputChange(e, field) {
    const state = Object.assign({}, this.state);
    state[field] = e.target.value;
    this.setState(state);
  }

  removeImage(index) {
    const { images, cover } = this.state;
    const copyImages = [...images];
    const image = images[index];
    if (image === cover) {
      cover = null;
    }
    copyImages.splice(index, 1);
    this.setState({ images: copyImages, cover });
  }

  makeCover(index) {
    let { images, cover } = this.state;
    const image = images[index];
    cover = image;
    this.setState({ cover });
  }

  render() {
    const {
      id, name, short_description, price, sale_price,
      editorState, canSubmit, images, cover,
    } = this.state;
    const title = id ? 'EDIT PRODUCT' : 'ADD NEW PRODUCT';
    return (
      <AppLayout
        title={title}
      >
        <Head>
          <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>
        </Head>
        <Row>
          <Col md={8}>
            <Block noHeader>
              <form onSubmit={this.handleSubmit}>
                <TextField
                  id="product-name"
                  label="Name"
                  value={name}
                  onChange={e => this.handleInputChange(e, 'name')}
                  required
                />
                <Row>
                  <Col md={6}>
                    <TextField
                      id="product-price"
                      label="Price"
                      value={price}
                      onChange={e => this.handleInputChange(e, 'price')}
                      required
                    />
                  </Col>
                  <Col md={6}>
                    <TextField
                      id="product-sale-price"
                      label="Sale Price (Not required)"
                      value={sale_price}
                      onChange={e => this.handleInputChange(e, 'sale_price')}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <TextField
                      id="product-summary"
                      label="Short Description"
                      value={short_description}
                      onChange={e => this.handleInputChange(e, 'short_description')}
                      multiline
                      autoHeight
                      required
                    />
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <TextEditor
                      ref={this.editor}
                      id="product-description"
                      label="Detail"
                      onChange={this.onEditorStateChange}
                      editorState={editorState}
                      required
                    />
                  </Col>
                </Row>
                
                <div className="clearfix">
                  <Button type="submit" className="m-r-25 m-b-10" disabled={!canSubmit}>
                    Submit
                  </Button>
                  <a href="/admin/products">
                    <Button className="m-r-25 m-b-10" type="button" color="dark-grey">
                      Cancel
                    </Button>
                  </a>
                </div>
              </form>
            </Block>
          </Col>
          <Col md={4}>
            {/* <PhotoUploader
              label="Upload photos"
              handleUpload={this.handleUpload}
            /> */}
            <button className={s.uploadButton} onClick={this.startUpload}>
              <i className="material-icons">
                add_a_photo
              </i>
              Upload photos
            </button>
            <div className={s['product-images-preview']}>
              {
                images.map((item, index) => (
                  <div className={cn(s.imageItem, (item === cover) && s.isCover)} key={index}>
                    <img src={item} alt="" />
                    <div className={s.imageHover}>
                      <Button autoWidth clear className={s.removeImageButton} onClick={() => this.removeImage(index)}>
                        <i className="material-icons">close</i>
                      </Button>
                      <Button clear className={s.makeCoverButton} onClick={() => this.makeCover(index)}>
                        Make cover
                      </Button>
                    </div>
                  </div>
                ))
              }
            </div>
          </Col>
        </Row>
      </AppLayout>
    );
  }
}

export default authenticate(withRouter(AddProduct));
