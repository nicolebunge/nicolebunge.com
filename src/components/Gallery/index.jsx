/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
import classNames from 'classnames';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import styles from './style.module.css';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      lightboxIsOpen: false,
    };
  }

  toggleLightbox = (selectedIndex) => {
    this.setState((state) => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedIndex,
    }));
  };

  render() {
    const { lightboxIsOpen, selectedIndex } = this.state;
    const { className, images, isLoading, ...otherProps } = this.props;
    const mappedImages = images.map((image) => ({ source: image.fluid.src }));

    return (
      <>
        <ul className={classNames(className, styles.gallery)} {...otherProps}>
          {images.map((image, index) => (
            <li key={index} className={styles.gallery__item}>
              <figure>
                <button onClick={() => this.toggleLightbox(index)} type="button">
                  <Img fluid={image.fluid} />
                </button>
              </figure>
            </li>
          ))}
        </ul>
        <ModalGateway>
          {lightboxIsOpen && !isLoading ? (
            <Modal onClose={this.toggleLightbox}>
              <Carousel
                currentIndex={selectedIndex}
                frameProps={{ autoSize: 'height' }}
                views={mappedImages}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </>
    );
  }
}

Gallery.propTypes = {
  className: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape()),
  isLoading: PropTypes.bool,
};

Gallery.defaultProps = {
  className: '',
  images: [],
  isLoading: false,
};

export default Gallery;
