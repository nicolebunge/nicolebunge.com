import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import './style.css';

class Main extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return (
      <main
        className="main"
        role="main"
      >
        {children}
      </main>
    );
  }
}

export default Main;
