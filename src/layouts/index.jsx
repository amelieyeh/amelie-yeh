import React from 'react';
import Helmet from 'react-helmet';
import Navigation from '../components/Navigation/Navigation';
import SEO from '../components/SEO/SEO';
import config from '../../config/SiteConfig';
import Footer from '../components/Footer/Footer';
import '../utils/emma.scss';

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="layout">
      <Helmet>
        <title>{config.siteTitle}</title>
        <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
      </Helmet>
      <SEO />
      <Navigation />
      {children()}
    </div>
  );
};

export default MainLayout;
