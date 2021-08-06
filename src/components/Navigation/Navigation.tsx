import classNames from 'classnames';
import { Link } from 'gatsby';
import capitalize from 'lodash/capitalize';
import React, { HTMLAttributes } from 'react';
import * as styles from './Navigation.module.css';

interface Route {
  name: string;
  path: string;
}

type NavigationClass = 'navigationMain';

export interface NavigationProps extends HTMLAttributes<HTMLDivElement> {
  inline?: boolean;
  routes: Route[];
  name?: 'main';
}

function Navigation(props: NavigationProps): JSX.Element {
  const { className, inline, name, routes, ...otherProps } = props;

  return (
    <nav
      className={classNames(className, styles.navigation, {
        [styles[`navigation${capitalize(name)}` as NavigationClass]]: name,
      })}
      {...otherProps}
    >
      {routes && (
        <ul
          className={classNames(styles.navigation__list, {
            [styles.navigation__listInline]: inline,
          })}
        >
          {routes.map((route) => (
            <li className={styles.navigation__item} key={route.path}>
              <Link
                to={route.path}
                className={styles.navigation__link}
                activeClassName={styles.navigation__linkActive}
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
