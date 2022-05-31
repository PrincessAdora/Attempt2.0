import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { VictoryChart, VictoryHistogram } from "victory";
import styles from "../styles.css";
import Search from "../search.js";
import Bronx from "../images/bronx.png";
import Manhattan from "../images/manhattan.png";
import Brooklyn from "../images/bridge.png";

function EndPage({ props, offset, color }) {
  return (
    <>
      <ParallaxLayer offset={offset} speed={1}>
        <div className={`shape ${color}`} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={1}>
        <div>{/* <Search/> */}</div>
      </ParallaxLayer>
    </>
  );
}

export default EndPage;
