import classNames from 'classnames';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';

class Navigation extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        path: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    className: '',
    routes: [],
  };

  render() {
    const { className, routes, ...otherProps } = this.props;

    return (
      <nav className={classNames(className, styles.navigation)} {...otherProps}>
        {routes && (
          <ul className={styles.navigation__list}>
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
}

export default Navigation;
