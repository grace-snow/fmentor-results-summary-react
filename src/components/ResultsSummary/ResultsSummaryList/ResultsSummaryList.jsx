import React from "react";

import ResultsSummaryListItem from '../ResultsSummaryListItem/ResultsSummaryListItem';
import { results } from "../../../data/resultsSummary";

function ResultsSummaryList() {

  return (
    <ol>
      {results.categories.map((item) => (
        <ResultsSummaryListItem
          key={`${item.label.toLowerCase()}-${crypto.randomUUID()}`}
          name={item.label}
          score={item.score}
          total={item.total} 
        />
      ))}
    </ol>
  );
}

export default ResultsSummaryList;
