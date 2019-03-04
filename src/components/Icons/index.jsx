import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';
import instagram from '../../images/instagram.svg';
import linkedin from '../../images/linkedin.svg';
import xing from '../../images/xing.svg';

class Icons extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;

    return (
      <ul className={classNames(className, styles.icons)}>
        <li>
          <a
            href="https://www.instagram.com/nicole.bunge/"
            itemProp="sameAs"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={instagram} alt="Nicole Bunge auf Instagram" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nicole-bunge-1b891415a/"
            itemProp="sameAs"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={linkedin} alt="Nicole Bunge auf LinkedIn" />
          </a>
        </li>
        <li>
          <a
            href="https://www.xing.com/profile/Nicole_Bunge3"
            itemProp="sameAs"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={xing} alt="Nicole Bunge auf Xing" />
          </a>
        </li>
      </ul>
    );
  }
}

export default Icons;
