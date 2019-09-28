import classNames from 'classnames';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Navigation = (props) => {
  const { className, inline, routes, ...otherProps } = props;

  return (
    <nav className={classNames(className, styles.navigation)} {...otherProps}>
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
};

Navigation.propTypes = {
  className: PropTypes.string,
  inline: PropTypes.bool,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    }),
  ),
};

Navigation.defaultProps = {
  className: '',
  inline: false,
  routes: [],
};

export default Navigation;
