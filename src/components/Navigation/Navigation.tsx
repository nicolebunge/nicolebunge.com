/* eslint-disable camelcase */

import clsx from 'clsx';
import { Link } from 'gatsby';
import React, { HTMLAttributes, useState } from 'react';
import {
  navigation,
  navigationMain,
  navigation__button,
  navigation__item,
  navigation__link,
  navigation__linkActive,
  navigation__list,
  navigation__listInline,
} from './Navigation.module.css';

interface Route {
  name: string;
  path: string;
}

type Name = 'main';

export interface NavigationProps extends HTMLAttributes<HTMLDivElement> {
  inline?: boolean;
  routes: Route[];
  name?: Name;
}

const navigationClassNames = {
  main: navigationMain,
};

function Navigation(props: NavigationProps): JSX.Element {
  const { className, inline, name, routes, ...otherProps } = props;
  const [isActive, setIsActive] = useState(false);

  function clickHandler(): void {
    setIsActive((state) => !state);
  }

  return (
    <nav
      className={clsx(className, navigation, {
        [navigationClassNames[name!]]: name,
        'is-active': isActive,
      })}
      {...otherProps}
    >
      <button className={navigation__button} type="button" onClick={clickHandler}>
        Menu
      </button>

      {routes && (
        <ul
          className={clsx(navigation__list, {
            [navigation__listInline]: inline,
          })}
        >
          {routes.map((route) => (
            <li className={navigation__item} key={route.path}>
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
