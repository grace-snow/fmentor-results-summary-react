import React from "react";

import { siteData } from '../../data/site';

function FooterAttribution({ className }) {
  return (
    <footer className={`center ${className}`}>
      <p className='attribution'>
        Challenge by{" "}
        <a href={siteData.challengeProviderUrl} target='_blank' rel="noopener" className='underline transition duration-500 ease-out hover:text-brand-2 focus-visible:outline-brand-2'>
          {siteData.challengeProvider}
        </a>
        . Coded by <a href={siteData.authorUrl} target='_blank' rel='noopener' className='underline transition duration-500 ease-out hover:text-brand-2 focus-visible:outline-brand-2'>{siteData.author}</a>.
      </p>
    </footer>
  );
}

export default FooterAttribution;
