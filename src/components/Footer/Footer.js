import React from 'react';
import AboutUsLinks from './AboutUsLinks';
import SupportLinks from './SupportLinks';
import SocialMediaLinks from './SocialMediaLinks';
import OfficeAddress from './OfficeAddress';
import CopyrightInfo from './CopyrightInfo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <AboutUsLinks />
      <SupportLinks />
      <SocialMediaLinks />
      <OfficeAddress />
      <CopyrightInfo />
    </footer>
  );
};

export default Footer;
