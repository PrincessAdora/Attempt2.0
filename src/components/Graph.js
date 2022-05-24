import React from "react";
import { VictoryChart, VictoryHistogram } from "victory";

function Graph(props) {
  return (
    <div>
      <VictoryChart>
        <VictoryHistogram
          style={{ data: { fill: "#F1737F" } }}
          cornerRadius={3}
          data={props.data}
        />
      </VictoryChart>
    </div>
  );
}

export default Graph;
