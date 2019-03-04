import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Icons from '../Icons';
import styles from './style.module.css';

class Social extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className, ...otherProps } = this.props;

    return (
      <div className={classNames(className, styles.social)} {...otherProps}>
        <Icons />
      </div>
    );
  }
}

export default Social;
