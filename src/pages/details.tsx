import React from 'react';

import SEO from '@/components/atoms/SEO';

const seoInfo = {
  title: 'LoL | Home',
  url: 'http://localhost:3000/',
  description: 'website description',
  siteName: 'Leadership for Executives',
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image'
  }
};

const registration = () => {
  return (
    <>
      <SEO SEOinformation={seoInfo} />
      <span>Details</span>
    </>
  );
};

export default registration;

