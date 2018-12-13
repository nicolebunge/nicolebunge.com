import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';

class Navigation extends PureComponent {
  static propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    })),
  };

  static defaultProps = {
    routes: [],
  };

  render() {
    const { routes } = this.props;

    return (
      <nav className={styles.navigation}>
        {routes && (
          <ul>
            {routes.map(route => (
              <li key={route.path}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    );
  }
}

export default Navigation;
