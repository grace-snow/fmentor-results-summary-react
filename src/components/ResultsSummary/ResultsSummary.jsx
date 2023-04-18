import React from "react";

import ResultsSummaryIntroPanel from './ResultsSummaryIntroPanel/ResultsSummaryIntroPanel';
import ResultsSummaryMainPanel from './ResultsSummaryMainPanel/ResultsSummaryMainPanel';

function ResultsSummary() {
  return (
    <section className='flex flex-col w-full max-w-md mx-auto md:max-w-[46rem] c-results-summary md:flex-row bg-white rounded-b-500 md:rounded-500 overflow-hidden shadow-ui'>
      <ResultsSummaryIntroPanel />
      <ResultsSummaryMainPanel />
    </section>
  )
}

export default ResultsSummary;