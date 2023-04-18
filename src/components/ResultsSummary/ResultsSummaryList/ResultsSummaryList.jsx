import React from "react";

import ResultsSummaryListItem from '../ResultsSummaryListItem/ResultsSummaryListItem';
import { results } from "../../../data/resultsSummary";

function ResultsSummaryList() {

  return (
    <ol className='flex flex-col items-center gap-4 my-400' role="list">
      {results.categories.map((item) => (
        <ResultsSummaryListItem
          key={`${item.label.toLowerCase()}-${crypto.randomUUID()}`}
          category={item.label}
          icon={item.icon}
          score={item.score}
          total={item.total}
        />
      ))}
    </ol>
  );
}

export default ResultsSummaryList;
