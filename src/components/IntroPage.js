import React, { useRef, forwardRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { VictoryChart, VictoryHistogram } from "victory";
import styles from "../styles.css";
import Bronx from "../images/bronx.png";
import Manhattan from "../images/manhattan.png";
import Brooklyn from "../images/bridge.png";
import Queens from "../images/Queens.png";
import StatenIsland from "../images/Ship.png";

function IntroPage({ props, offset, color }) {
  // // const parallax = useRef(null);

  // // const Receiver = forwardRef((props, ref) => {
  // //   return <input ref={ref} {...props} />;
  // // });

  // const handleScrollRight = () => {
  //   window.scrollTo({ left: 50, behavior: "smooth" });
  // };

  return (
    <>
      <ParallaxLayer offset={offset} speed={1}>
        <div className={`shape ${color}`} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={2}>
        <div className="background" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={offset}
        speed={1.7}
        style={{ marginTop: "70px", marginLeft: "-150px" }}
      >
        {/* <div className="arrow"> ↓ </div> */}
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={1.7} style={{ marginTop: "250px" }}>
        <img src={Bronx} width="100" height="100" alt="" className="icon1" />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={1.7} style={{ marginTop: "70px" }}>
        {/* <div className="arrow"> ↓ </div> */}
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={1.7} style={{ marginTop: "250px" }}>
        <img
          src={Manhattan}
          width="100"
          height="100"
          alt=""
          className="icon2"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={offset}
        speed={1.7}
        style={{ marginTop: "70px", marginLeft: "150px" }}
      >
        {/* <div className="arrow"> ↓ </div> */}
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={1.7} style={{ marginTop: "250px" }}>
        <img src={Brooklyn} width="100" height="100" alt="" className="icon3" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={offset}
        speed={1.7}
        style={{ marginTop: "50px", marginLeft: "50px" }}
      >
        <img src={Queens} width="100" height="100" alt="" className="icon1" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={offset}
        speed={1.7}
        style={{ marginTop: "50px", marginLeft: "250px" }}
      >
        <img
          src={StatenIsland}
          width="100"
          height="100"
          alt=""
          className="icon1"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={offset}
        speed={2.3}
        style={{ marginTop: "-280px" }}
      >
        <div>
          <p className="text">Restaurant Reviews</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={offset}
        speed={2.3}
        style={{ marginTop: "-150px" }}
      >
        <div>
          <p className="par">
            Welcome to ResInspect. Click one of the buttons <br />
            below to know the average restuarant ratings for that borough.
            <br />
            Use the search bar to know ratings for individual restaurants.
          </p>
        </div>
      </ParallaxLayer>
    </>
  );
}

export default IntroPage;
