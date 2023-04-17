import React from 'react';

import { cmsConfig } from '../../../data/resultsSummary';
import ResultsSummaryList from '../ResultsSummaryList/ResultsSummaryList';

function ResultsSummaryMainPanel() {
  return (
    <div>
      <h2>{cmsConfig.summaryHeading}</h2>
      <ResultsSummaryList />
    </div>
  )
}

export default ResultsSummaryMainPanel;