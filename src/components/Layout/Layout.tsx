import classNames from 'classnames';
import { Link } from 'gatsby';
import React, { HTMLAttributes, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { NOW } from '../../constants/dates';
import { FOOTER, MAIN } from '../../constants/menus';
import { useSite } from '../../hooks/site';
import CloudinaryImage from '../CloudinaryImage';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';
import Social from '../Social';
import * as styles from './Layout.module.css';

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Layout(props: LayoutProps): JSX.Element {
  const { children, className, ...otherProps } = props;
  const { site } = useSite();

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
          <CloudinaryImage src="nicole-bunge.svg" alt={site.siteMetadata.title} width={160} />
        </Link>

        <Navigation inline routes={MAIN} />
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Grid>
          <Navigation inline routes={FOOTER} />
          <p>© {NOW.getFullYear()} Nicole Bunge</p>
        </Grid>
      </Footer>
      <Social />
    </div>
  );
}

export default Layout;
