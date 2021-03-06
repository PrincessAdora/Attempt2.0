import React from "react";
import data from "./ListData.js";
import {
  VictoryChart,
  VictoryHistogram,
  VictoryBar,
  VictoryAxis
} from "victory";

function SIGraph(props) {
  let a = 0;
  let b = 0;
  let c = 0;

  data.map((data) => {
    if (
      (data.grade == "A" || data.score < 14) &&
      data.boro == "Staten Island"
    ) {
      a++;
    } else if (
      (data.grade == "B" || data.score < 28) &&
      data.boro == "Staten Island"
    ) {
      b++;
    } else if (
      (data.grade == "C" || data.score > 28) &&
      data.boro == "Staten Island"
    ) {
      c++;
    }
  });

  const app = [
    { tag: "A", grade: a },
    { tag: "B", grade: b },
    { tag: "C", grade: c }
  ];

  return (
    <div>
      <VictoryChart domainPadding={50} width={600} height={600}>
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          tickValues={[1, 2, 3]}
          tickFormat={["A", "B", "C"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          //tickFormat={(x) => (`${x}`)}
        />
        <VictoryBar
          style={{ data: { fill: "#F1737F" } }}
          // cornerRadius={3}
          barRatio={0.8}
          data={app}
          x="tag"
          y="grade"
        />
      </VictoryChart>
    </div>
  );
}

export default SIGraph;
