import React from "react";

import { siteData } from '../../data/site';

function FooterAttribution({ className }) {
  return (
    <footer className={`center p-4 ${className ? className : ''}`}>
      <p className='attribution'>
        Challenge by{" "}
        <a href={siteData.challengeProviderUrl} target='_blank' rel="noopener" className='underline transition duration-500 ease-out hover:text-violet-800'>
          {siteData.challengeProvider}
        </a>
        . Coded by <a href={siteData.authorUrl} target='_blank' rel='noopener' className='underline transition duration-500 ease-out hover:text-violet-800'>{siteData.author}</a>.
      </p>
    </footer>
  );
}

export default FooterAttribution;
