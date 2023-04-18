import React from "react";

function ResultsSummaryListItem({ category, score, icon, total }) {
  return (
    <li
      className='flex flex-wrap items-center w-full gap-3 p-4 rounded-xl'
      style={{
        color: `var(--${category})`,
        backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95))`,
        backgroundColor: `var(--${category})`,
      }}
      role='listitem'>
      <img src={icon} alt='' className='h-[20px] w-[20px]' />
      <h3 className='text-left grow text-16-18 leading-0'>{category}</h3>
      <p className='font-bold leading-0 text-violet-900 ms-auto'>
        {score}{" "}
        <span className='opacity-50 ms-1 '>
          <abbr title='out of' className='no-underline'>
            /
          </abbr>{" "}
          {total}
        </span>
      </p>
    </li>
  );
}

export default ResultsSummaryListItem;
