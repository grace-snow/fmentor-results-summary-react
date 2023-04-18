import React from "react";

import ResultsSummary from "./components/ResultsSummary/ResultsSummary";
import FooterAttribution from "./components/FooterAttribution/FooterAttribution";
import CenterAllChildren from "./components/CenterAllChildren/CenterAllChildren";

function App() {
  return (
    <>
      <main>
        <CenterAllChildren outerClasses="max-md:content-start">
          <ResultsSummary />
        </CenterAllChildren>
      </main>
      <FooterAttribution />
    </>
  );
}

export default App;
