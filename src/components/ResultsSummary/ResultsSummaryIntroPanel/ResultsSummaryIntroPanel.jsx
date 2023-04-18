import React from "react";

import { cmsConfig, results } from "../../../data/resultsSummary";
import VisuallyHidden from '../../VisuallyHidden/VisuallyHidden';

function ResultsSummaryIntroPanel({ children }) {
  return (
    <div className='bg-gradient-to-b from-violet-400 via-violet-500 to-violet-600 text-white pt-400 px-600 pb-600 md:pt-600 md:pb-700 flex flex-col items-center rounded-b-500 md:rounded-500 w-full'>
      <h1 className='font-extrabold text-neutral-300 text-18-24'>{cmsConfig.mainHeading}</h1>
      <p className='grid p-6 my-400 md:mt-500 rounded-full place-content-center aspect-square w-[8.75rem] md:w-[12.5rem] bg-gradient-to-b from-violet-800 to-violet-100'>
        <span className='font-extrabold leading-none text-56-72 mb-50'>{results.summary.score}</span> <span className='font-bold text-neutral-300'>of {results.summary.total}</span>
      </p>
      <h2 className='font-bold text-24-32 mt-50'>
        <VisuallyHidden>Your rating:</VisuallyHidden> {results.summary.levelLabel}
      </h2>
      <p className='mt-2 max-w-[18rem] text-neutral-300'>
        You scored higher than {"65%"} of the people who have taken these tests.
      </p>
    </div>
  );
}

export default ResultsSummaryIntroPanel;
