import 'typeface-source-sans-pro';
import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import Cookie from '../Cookie';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';
import * as routes from '../../constants/routes';
import styles from './style.module.css';

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
        render={data => (
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
              <Grid>
                <h1>
                  <Link to="/">{data.site.siteMetadata.title}</Link>
                </h1>
                <Navigation routes={[routes.INDEX]} />
              </Grid>
            </Header>
            <Main>
              <Grid>{children}</Grid>
            </Main>
            <Footer>
              <Grid>
                <p>
                  ©
                  {' '}
                  {new Date().getFullYear()}
                  {' '}
                  Nicole Bunge
                </p>

                <Navigation routes={[routes.PRIVACY, routes.IMPRINT]} />
              </Grid>
            </Footer>
            <Cookie />
          </div>
        )}
      />
    );
  }
}

export default Layout;
