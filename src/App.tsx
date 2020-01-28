import React from "react";
import DroppingBackground from "components/DroppingBackground";
import DropMelt from "model/DropAnimation/DropMelt";
import SwingDrop from "model/DropAnimation/SwingDrop";
import RandomSnow from "components/RandomSnow";
import Drop from "model/DropAnimation/Drop";

const App = () => {
  return (
    <div>
      <DroppingBackground
        maxElementCount={600}
        createTimeInterval={50}
        dropAnimation={new SwingDrop(40, 3, 5)}
        // dropAnimation={new DropMelt(14)}
        // dropAnimation={new Drop()}
        dropComponent={<RandomSnow maxDiameter={17} minDiameter={9} />}
        maxDropMsec={12000}
        minDropMesc={6000}
      />
    </div>
  );
};

export default App;
