import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import cn from 'classnames';
import s from './AppSideBar.scss';

const NAV_ITEMS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/admin',
    icon: 'dashboard',
  },
  {
    key: 'products',
    label: 'Products',
    path: '/admin/products',
    icon: 'card_giftcard',
    items: [
      {
        label: 'List products',
        path: '/admin/products',
      },
      {
        label: 'Add a product',
        path: '/admin/products/add',
      },
    ],
  },
];

const AppSideBar = ({ router, isCollapse }) => {
  const { pathname } = router;
  return (
    <div className={cn(s.sidebar, isCollapse && s.collapsed)}>
      <ul>
        {
          NAV_ITEMS.map(menu => (
            <li md={3} sm={4} key={menu.key}>
              {/* <Link href={menu.path} prefetch passHref> */}
                <a href={menu.path} className={cn(s['sidebar-link'], (pathname === menu.path) && s.active)}>
                  {
                    menu.icon && (
                    <i className="material-icons">
                      {menu.icon}
                    </i>
                  )}
                  {menu.label}
                  {/* {menu.items && <i className="material-icons">keyboard_arrow_down</i>} */}
                </a>
              {/* </Link> */}
              {/* {
                menu.items && (
                  <ul className={cn(s["sidebar-submenus"], s["active"])}>
                    {
                      menu.items.map((item, index) => (
                        <li key={index}>
                          <Link href={item.path}>
                            <a className={s["sidebar-link"]}>{item.label}</a>
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                )
              } */}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default withRouter(AppSideBar);
