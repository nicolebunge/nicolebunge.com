import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';

class Gallery extends PureComponent {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape),
  };

  static defaultProps = {
    images: [],
  };

  render() {
    const { images } = this.props;

    return (
      <ul className={styles.gallery}>
        {images.map(image => (
          <li className={styles.gallery__item}>
            <figure className={styles.gallery__figure}>
              <picture>
                <img
                  src={image}
                  alt=""
                  className={styles.gallery__image}
                />
              </picture>
            </figure>
          </li>
        ))}
      </ul>
    );
  }
}

export default Gallery;
