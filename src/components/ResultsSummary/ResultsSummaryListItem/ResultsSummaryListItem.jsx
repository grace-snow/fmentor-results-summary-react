import React from 'react';

function ResultsSummaryListItem({ name, score, total }) {

  return (
    <li className=''>
      {/* <img src="" alt="" /> */}
      <h3>{name}</h3>
      <p>
        {score} / {total}
      </p>
    </li>
  );
}

export default ResultsSummaryListItem;
