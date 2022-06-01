import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { VictoryChart, VictoryHistogram } from "victory";
// import Navbar from "./NavBar";
import Bronx from "../images/bronx.png";
import Manhattan from "../images/manhattan.png";
import Brooklyn from "../images/bridge.png";
import Search from "../search";
import styles from "../styles.css";

function Page({ props, offset, color }) {
  const parallax = useRef(null);

  return (
    <>
      <ParallaxLayer offset={offset} speed={1}>
        <div className={`shape ${color}`} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={2}>
        <div className="background" />
      </ParallaxLayer>

      {/* Set offset to a specific number if you only want that layer to show on one page,
    set offset to offset if you want that layer to show on every page */}
      {/* add reusable layers here as Page component*/}

      {/* SOMETHING IN BACKGROUND PUT AN INVISIBLE OVERLAY OVER THE WEBPAGE, PREVENTING YOU FROM BEING ABLE TO CLICK ANYTHING */}
      {/*Background Parallax layer -- behind all other layers */}
      {/* <ParallaxLayer offset={offset} speed={1}>
        <div className="background"></div>
      </ParallaxLayer> */}

      {/*Color Parallax Layer -- over background layer */}

      {/*Text Parallax Layer -- over color and backgronund layers */}
      {/* <ParallaxLayer offset={offset} speed={1}>
        <div className="text">
          <span>Restaurant Reviews</span>
        </div>
      </ParallaxLayer> */}

      {/*Navbar Parallax layer -- behind all other layers */}

      {/* <ParallaxLayer
        offset={offset}
        speed={3.5}
        style={{ marginTop: "-200px" }}
      >
        <Navbar />
      </ParallaxLayer> */}

      {/* <ParallaxLayer offset={offset} speed={1.7} style={{ marginTop: "100px" }}>
        <img src={Bronx} width="100" height="100" alt="" className="icon1" />
      </ParallaxLayer> */}

      {/* <ParallaxLayer
        offset={offset}
        speed={1.85}
        style={{ marginTop: "100px" }}
      >
        <img
          src={Manhattan}
          width="100"
          height="100"
          alt=""
          className="icon2"
        />
      </ParallaxLayer> */}

      {/* <ParallaxLayer offset={offset} speed={2} style={{ marginTop: "100px" }}>
        <img src={Brooklyn} width="100" height="100" alt="" className="icon3" />
      </ParallaxLayer> */}

      {/* <ParallaxLayer
        offset={offset}
        ref={parallax}
        speed={1.2}
        style={{ marginTop: "200px", marginLeft: "-150px" }}
        onClick={() => parallax.current.scrollTo(1)}
      >
        <button className="button">
          <div>BRONX</div>
        </button>
      </ParallaxLayer> */}

      {/* <ParallaxLayer
        offset={offset}
        ref={parallax}
        speed={1.35}
        style={{ marginTop: "200px" }}
        onClick={() => parallax.current.scrollTo(2)}
      >
        <button className="button">
          <div>MANHATTAN</div>
        </button>
      </ParallaxLayer> */}

      {/* <ParallaxLayer
        offset={offset}
        ref={parallax}
        speed={1.4}
        style={{ marginTop: "200px", marginLeft: "150px" }}
        onClick={() => parallax.current.scrollTo(3)}
      >
        <button className="button">
          <div>BROOKLYN</div>
        </button>
      </ParallaxLayer> */}

      {/* <ParallaxLayer
        offset={offset}
        speed={1.4}
        style={{ marginTop: "200px", marginLeft: "150px", marginTop: "-0px" }}
      >
        <div>
          <Search />
        </div>
      </ParallaxLayer> */}

      {/* <ParallaxLayer
        offset={offset}
        speed={1.4}
        style={{ marginTop: "200px", marginLeft: "150px" }}
 
      >
        <Graph data={props.RestaurantData} />
      </ParallaxLayer> */}
    </>
  );
}

export default Page;
