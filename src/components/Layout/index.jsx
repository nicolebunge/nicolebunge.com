import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import 'typeface-source-sans-pro';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import './style.module.css';

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
          <div>
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
                <h1 style={{ margin: 0 }}>
                  <Link
                    to="/"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    {data.site.siteMetadata.title}
                  </Link>
                </h1>
              </Grid>
            </Header>
            <Main>
              <Grid>
                {children}
              </Grid>
            </Main>
            <Footer>
              <Grid>
                ©
                {' '}
                {(new Date()).getFullYear()}
                {' '}
                Nicole Bunge
              </Grid>
            </Footer>
          </div>
        )}
      />
    );
  }
}

export default Layout;
