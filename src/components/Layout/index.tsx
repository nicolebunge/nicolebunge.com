import classNames from 'classnames';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { HTMLAttributes } from 'react';
import { Helmet } from 'react-helmet';
import 'typeface-source-sans-pro';
import { NOW } from '../../constants/dates';
import * as routes from '../../constants/routes';
import nicoleBunge from '../../images/nicole-bunge.svg';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';
import Social from '../Social';
import styles from './style.module.css';

export type LayoutProps = HTMLAttributes<HTMLDivElement>;

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, className, ...otherProps } = props;
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={classNames(className, styles.layout)} {...otherProps}>
      <Helmet
        title={site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Header>
        <Link to="/">
          <img src={nicoleBunge} alt={site.siteMetadata.title} width="160" />
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
          <p>© {NOW.getFullYear()} Nicole Bunge</p>
        </Grid>
      </Footer>
      <Social />
    </div>
  );
};

export default Layout;
