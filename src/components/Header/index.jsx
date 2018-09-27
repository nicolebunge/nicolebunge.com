import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Grid from '../Grid';
import './style.css';

const Header = ({ siteTitle }) => (
  <div className="header">
    <Grid>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Grid>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
