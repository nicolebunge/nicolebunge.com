import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import './style.css';

class Footer extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return (
      <footer
        className="footer"
        role="contentinfo"
      >
        {children}
      </footer>
    );
  }
}

export default Footer;
