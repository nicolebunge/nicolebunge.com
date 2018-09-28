import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import './style.css';

class Header extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return (
      <header
        className="header"
        role="banner"
      >
        {children}
      </header>
    );
  }
}

export default Header;
