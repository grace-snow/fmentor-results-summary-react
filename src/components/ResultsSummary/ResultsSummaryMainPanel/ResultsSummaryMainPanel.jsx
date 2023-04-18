import React from 'react';
import ResultsSummaryList from '../ResultsSummaryList/ResultsSummaryList';
import ButtonPrimary from '../../Button/ButtonPrimary/ButtonPrimary'

import { cmsConfig } from '../../../data/resultsSummary';

function ResultsSummaryMainPanel() {
  return (
    <div className='w-full bg-white py-400 px-500 md:p-600'>
      <h2 className='font-bold text-violet-900 md:text-left text-18-24'>{cmsConfig.summaryHeading}</h2>
      <ResultsSummaryList />
      <ButtonPrimary className='w-full'>{cmsConfig.buttonLabel}</ButtonPrimary>
    </div>
  )
}

export default ResultsSummaryMainPanel;