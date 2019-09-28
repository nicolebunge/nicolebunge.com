import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import instagram from '../../images/instagram.svg';
import linkedin from '../../images/linkedin.svg';
import xing from '../../images/xing.svg';
import styles from './style.module.css';

const Icons = (props) => {
  const { className, ...otherProps } = props;

  return (
    <ul className={classNames(className, styles.icons)} {...otherProps}>
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
};

Icons.propTypes = {
  className: PropTypes.string,
};

Icons.defaultProps = {
  className: '',
};

export default Icons;
