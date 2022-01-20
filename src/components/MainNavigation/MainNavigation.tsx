/* eslint-disable camelcase */

import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { useLockBodyScroll, useToggle } from 'react-use';
import Link from '../Link';
import {
  mainNavigation,
  mainNavigationIsActive,
  mainNavigation__button,
  mainNavigation__item,
  mainNavigation__link,
  mainNavigation__linkActive,
  mainNavigation__list,
  mainNavigation__listInline,
} from './MainNavigation.module.css';
import { Menu1, XMark1 } from '../Icons';

interface Route {
  name: string;
  path: string;
}

export interface NavigationProps extends HTMLAttributes<HTMLDivElement> {
  inline?: boolean;
  routes: Route[];
}

function MainNavigation(props: NavigationProps): JSX.Element {
  const { className, inline = true, routes, ...otherProps } = props;
  const [isActive, toggle] = useToggle(false);

  useLockBodyScroll(isActive);

  return (
    <nav
      className={clsx(className, mainNavigation, {
        [mainNavigationIsActive]: isActive,
      })}
      {...otherProps}
    >
      <button className={mainNavigation__button} type="button" onClick={toggle}>
        {isActive ? <XMark1 /> : <Menu1 />}
      </button>

      {routes && (
        <ul
          className={clsx(mainNavigation__list, {
            [mainNavigation__listInline]: inline,
          })}
        >
          {routes.map((route) => (
            <li className={mainNavigation__item} key={route.path}>
              <Link
                to={route.path}
                className={mainNavigation__link}
                activeClassName={mainNavigation__linkActive}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default MainNavigation;
