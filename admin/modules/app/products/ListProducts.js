import React from 'react';
import Swal from 'sweetalert2';
import { AppLayout, Button, Block } from '../../../commons/uikit';
import { ADD_PRODUCT_URL, PRODUCT_DETAIL, EDIT_PRODUCT_URL } from '../../../constants';
import authenticate from '../../../commons/utils/authenticate';
import * as ProductServices from './services';

class ListProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.deleteProduct = this.deleteProduct.bind(this);
    this.comfirmDeleteProduct = this.comfirmDeleteProduct.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const data = await ProductServices.getProducts();
    if (data) {
      this.setState({ products: data.products });
    }
  }

  deleteProduct = async (index) => {
    const { products } = this.state;
    const product = products[index];
    const count = await ProductServices.deleteProduct(product._id);
    if (count) {
      products.splice(index, 1);
      this.setState({ products }, () => {
        Swal.fire(
          'Deleted!',
          'Your product has been deleted.',
          'success',
        );
      });
    }
  }

  comfirmDeleteProduct = async (index) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this product!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        this.deleteProduct(index);
      }
    });
  }

  render() {
    const { products } = this.state;
    return (
      <AppLayout
        title="Danh sách sản phẩm"
        topRightButton={(
          <a href={ADD_PRODUCT_URL}>
            <Button>
              Add new Product
            </Button>
          </a>
        )}
      >
        <Block noHeader>
          <div className="table-responsive">
            <table>
              <tbody>
                <tr>
                  <th>
                    #
                  </th>
                  <th>
                    Name
                  </th>
                  <th>
                    Price
                  </th>
                  <th>
                    Sale Price
                  </th>
                  <th />
                </tr>
                {
                  products.map(({
                    _id: id, name, price, sale_price: salePrice
                  }, key) => (
                    <tr key={id}>
                      <td>
                        {key + 1}
                      </td>
                      <td>
                        {name}
                      </td>
                      <td>
                        {price}
                      </td>
                      <td>
                        {salePrice}
                      </td>
                      <td className="cell-actions">
                        {/* <a href={PRODUCT_DETAIL(id)}>
                          <Button outline autoWidth className="m-r-10">
                            <i className="material-icons">
                              remove_red_eye
                            </i>
                          </Button>
                        </a> */}
                        <a href={EDIT_PRODUCT_URL(id)}>
                          <Button outline autoWidth className="m-r-10">
                            <i className="material-icons">
                              edit
                            </i>
                          </Button>
                        </a>
                        <Button outline autoWidth color="danger" onClick={() => this.comfirmDeleteProduct(key)}>
                          <i className="material-icons">
                            delete
                          </i>
                        </Button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </Block>
      </AppLayout>
    );
  }
}

export default authenticate(ListProducts);
