import clsx from 'clsx';
import { Link } from 'gatsby';
import React, { HTMLAttributes, ReactNode } from 'react';
import { NOW } from '../../constants/dates';
import { FOOTER, MAIN } from '../../constants/menus';
import { useSite } from '../../hooks/site';
import Header from '../Header';
import CloudinaryImage from '../CloudinaryImage';
import Navigation from '../Navigation';
import Main from '../Main';
import Footer from '../Footer';
import Grid from '../Grid';
import Social from '../Social';
import { layout } from './Layout.module.css';
import MainNavigation from '../MainNavigation';

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * @link https://www.gatsbyjs.com/docs/how-to/routing/layout-components/
 */

function Layout(props: LayoutProps): JSX.Element {
  const { children, className } = props;
  const { site } = useSite();

  return (
    <div className={clsx(className, layout)}>
      <Header>
        <Link to="/">
          <CloudinaryImage
            src="nicole-bunge.svg"
            alt={site.siteMetadata.title}
            width={160}
            height={28}
          />
        </Link>

        <MainNavigation routes={MAIN} />
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
