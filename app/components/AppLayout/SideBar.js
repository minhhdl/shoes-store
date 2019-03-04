import React, { PureComponent } from 'react';
import Link from 'next/link';
import { Container } from '../Grid';
import PropTypes from 'prop-types';

import s from './SideBar.scss';

class SideBar extends PureComponent {
  static propTypes = {
    active: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      active: nextProps.active,
    });
  }

  render() {
    const { active: activeState } = this.state;

    if (!activeState) return null;

    return (
      <div className={s.root}>
        <Container>
          <div className={s.wrapper}>
            <div className={s.accountInfo}>
              <button
                autoWidth
                clear
                className={s.closeBtn}
                onClick={this.props.onClosePress}
              >
                <i className="material-icons">close</i>
              </button>
            </div>
            <div className={s.links}>
              <ul className={s.headerLinks}>
                <li>
                  <Link href="/" passHref>
                    <a className={s.headerLink}>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <a className={s.headerLink}>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop" passHref>
                    <a className={s.headerLink}>Shop</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default SideBar;
