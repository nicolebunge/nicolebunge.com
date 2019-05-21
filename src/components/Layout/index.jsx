import classNames from 'classnames';
import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import 'typeface-source-sans-pro';
import * as routes from '../../constants/routes';
import nicoleBunge from '../../images/nicole-bunge.svg';
import Cookie from '../Cookie';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';
import Social from '../Social';
import styles from './style.module.css';

class Layout extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    className: '',
  };

  render() {
    const { children, className, ...otherProps } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data) => (
          <div className={classNames(className, styles.layout)} {...otherProps}>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header>
              <Link to="/">
                <img src={nicoleBunge} alt={data.site.siteMetadata.title} width="160" />
              </Link>

              <Navigation
                inline
                routes={[
                  routes.INDEX,
                  routes.ABOUT,
                  routes.GALLERY,
                  routes.ACTING,
                  routes.THEATRE_PEDAGOGY,
                  routes.CONTACT,
                ]}
              />
            </Header>
            <Main>{children}</Main>
            <Footer>
              <Grid>
                <Navigation inline routes={[routes.PRIVACY, routes.IMPRINT]} />
                <p>© {new Date().getFullYear()} Nicole Bunge</p>
              </Grid>
            </Footer>
            <Cookie />
            <Social />
          </div>
        )}
      />
    );
  }
}

export default Layout;
