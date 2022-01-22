/* eslint-disable camelcase */

import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import Link from '../Link';
import {
  navigation,
  navigation__link,
  navigation__linkActive,
  navigation__list,
  navigation__listInline,
} from './Navigation.module.css';

interface Route {
  name: string;
  path: string;
}

export interface NavigationProps extends HTMLAttributes<HTMLDivElement> {
  inline?: boolean;
  routes: Route[];
}

function Navigation(props: NavigationProps): JSX.Element {
  const { className, inline, routes, ...otherProps } = props;

  return (
    <nav className={clsx(className, navigation)} {...otherProps}>
      {routes && (
        <ul
          className={clsx(navigation__list, {
            [navigation__listInline]: inline,
          })}
        >
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className={navigation__link}
                activeClassName={navigation__linkActive}
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

export default Navigation;
