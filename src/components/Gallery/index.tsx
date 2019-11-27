/* eslint-disable react/no-array-index-key */

import classNames from 'classnames';
import Img, { FluidObject } from 'gatsby-image';
import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import styles from './style.module.css';

interface Image {
  fluid: FluidObject;
}

export interface GalleryProps {
  className?: string;
  images: Image[];
  isLoading?: boolean;
}

export interface GalleryState {
  lightboxIsOpen: boolean;
  selectedIndex: number;
}

class Gallery extends Component<GalleryProps, GalleryState> {
  constructor(props: GalleryProps) {
    super(props);

    this.state = {
      selectedIndex: 0,
      lightboxIsOpen: false,
    };
  }

  toggleLightbox = (selectedIndex: number): void => {
    this.setState((state) => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedIndex,
    }));
  };

  render(): JSX.Element {
    const { lightboxIsOpen, selectedIndex } = this.state;
    const { className, images, isLoading, ...otherProps } = this.props;
    const mappedImages = images.map((image) => ({ source: image.fluid.src }));

    return (
      <>
        <ul className={classNames(className, styles.gallery)} {...otherProps}>
          {images.map((image, index) => (
            <li key={index} className={styles.gallery__item}>
              <figure>
                <button onClick={(): void => this.toggleLightbox(index)} type="button">
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

export default Gallery;
