import React from 'react';
import { Container, Row, Col } from '../Grid';
import SideBar from './SideBar';
import style from './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSideBar: false,
    };
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  toggleSideBar() {
    this.setState(Object.assign({}, this.state, { activeSideBar: !this.state.activeSideBar }));
  }

  render() {
    return (
      <header className={style.header}>
        <SideBar active={this.state.activeSideBar} onClosePress={this.toggleSideBar} />
        <Container>
          <div className={style.headerContainer}>
            <div className={style.logo}>
              <h2><a href="/"><span>Downy</span> Shoes</a></h2>
            </div>
            <div className={style.right}>
              <button className={style.button}>
                <i className="material-icons">shopping_cart</i>
              </button>
              <button className={style.button}>
                <i className="material-icons">search</i>
              </button>
              <button className={style.button} onClick={this.toggleSideBar}>
                <i className="material-icons">menu</i>
              </button>
            </div>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;