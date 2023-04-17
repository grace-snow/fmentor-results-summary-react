import React from "react";

import { cmsConfig, results } from "../../../data/resultsSummary";

function ResultsSummaryIntroPanel({ children }) {
  return (
    <div>
      <h1>{cmsConfig.mainHeading}</h1>
      <p>
        {results.summary.score} / {results.summary.total}
      </p>
      <h2>
        <span>Your rating:</span> {results.summary.levelLabel}
      </h2>
      <p>You scored higher than {"65%"} of the people who have taken these tests.</p>
    </div>
  );
}

export default ResultsSummaryIntroPanel;
