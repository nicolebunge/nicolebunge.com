import { Link } from 'gatsby';
import React from 'react';
import CookieConsent from 'react-cookie-consent';
import * as routes from '../../constants/routes';

const Cookie: React.FC = () => (
  <CookieConsent>
    Um die Webseite optimal gestalten und fortlaufend verbessern zu können, werden Cookies
    verwendet. Durch die weitere Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu.{' '}
    <Link to={routes.PRIVACY.path}>{routes.PRIVACY.name}</Link>
  </CookieConsent>
);

export default Cookie;
