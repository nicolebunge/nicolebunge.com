import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import './style.css';

class Grid extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    const { children } = this.props;

    return (
      <div className="grid">
        {children}
      </div>
    );
  }
}

export default Grid;
