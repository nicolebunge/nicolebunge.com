import 'typeface-source-sans-pro';
import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import Cookie from '../Cookie';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Social from '../Social';
import Main from '../Main';
import Navigation from '../Navigation';
import * as routes from '../../constants/routes';
import styles from './style.module.css';
import nicoleBunge from '../../images/nicole-bunge.svg';

class Layout extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

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
          <div className={styles.layout}>
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
                routes={[
                  routes.INDEX,
                  routes.ABOUT,
                  routes.ACTING,
                  routes.THEATRE_PEDAGOGY,
                  routes.CONTACT,
                ]}
              />
            </Header>
            <Main>{children}</Main>
            <Footer>
              <Grid>
                <Navigation routes={[routes.PRIVACY, routes.IMPRINT]} />
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
