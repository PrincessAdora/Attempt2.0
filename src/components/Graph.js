import React from "react";
import { VictoryChart, VictoryHistogram, VictoryBar } from "victory";

function Graph(props) {
  return (
    <div>
      <VictoryChart>
        <VictoryBar
          style={{ data: { fill: "#F1737F" } }}
          // cornerRadius={3}
          data={props.data}
          x={props.zipcode}
          y={props.grade}
        />
      </VictoryChart>
    </div>
  );
}

export default Graph;
