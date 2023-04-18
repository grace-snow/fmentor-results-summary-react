export const cmsConfig = {
  mainHeading: "Your Result",
  summaryHeading: "Summary",
  buttonLabel: "Continue",
};

// Would likely come from API
export const results = {
  summary: {
    score: "76",
    total: "100",
    levelLabel: "Great",
    higherThan: "65%",
  },
  categories: [
    {
      label: "Reaction",
      icon: "./images/icon-reaction.svg",
      score: "80",
      total: "100",
    },
    {
      label: "Memory",
      icon: "./images/icon-memory.svg",
      score: "92",
      total: "100",
    },
    {
      label: "Verbal",
      icon: "./images/icon-verbal.svg",
      score: "61",
      total: "100",
    },
    {
      label: "Visual",
      icon: "./images/icon-visual.svg",
      score: "72",
      total: "100",
    },
  ],
};
