import styles from "./styles.css";
import React, { Component, useState } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { useSpring, animated } from "react-spring";
import { BubbleChart } from "reaviz";
import Navbar from "./components/NavBar";
import Footer from "./components/footer";
import IntroPage from "./components/IntroPage";
import Page from "./components/Page";
import { render } from "react-dom";
import BronxGraph from "./components/BronxGraph";
import ManhattanGraph from "./components/ManhattanGraph";
import QueensGraph from "./components/QueensGraph";
import SIGraph from "./components/SIGraph";
import BrooklynGraph from "./components/BrooklynGraph";
import Cards from "./components/Cards";
import EndPage from "./components/EndPage";
import "./search.css";
import data from "./components/ListData";
import search from "./search.js";
import arrow from "./images/arrow.png";

//https://icons8.com/icons/set/bridge
//Ship icon by Icons8
//Airport icon by Icons8

class App extends Component {
  /* your return here to call what is shown on the page*/
  constructor(props) {
    super(props);
    this.state = {
      // Add data state here
      data: [],
      dataIsLoaded: false
    };
  }

  // Code your API request here
  componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/43nn-pn8j.json?$$app_token=Ee7bibJxma3jcUJjogz19BnXK&$limit=50"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data,
          dataIsLoaded: true
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //https://stackoverflow.com/questions/55130413/animated-button-with-react-spring {
  queryClicked = () => {
    const [pressed, setPressed] = useState(false);
    const { scale } = useSpring({ scale: clicked ? 0.8 : 1 });
  };

  // }

  render() {
    const { dataIsLoaded, data } = this.state;

    return (
      <div>
        <Parallax
          pages={7}
          ref={(ref) => (this.parallax = ref)}
          className="container"
          horizontal
        >
          <IntroPage offset={0} color="light" />
          <Page offset={1} color="mid" />
          <Page offset={2} color="dark" />
          <Page offset={3} color="darker" />
          <Page offset={4} color="darkerer" />
          <Page offset={5} color="darkest" />
          <EndPage offset={6} color="deep" />

          {/* BUTTONS */}
          <ParallaxLayer offset={0} speed={1.7}>
            <animated.button
              //  onMouseDown={() => this.queryClicked.set(true)}
              onClick={() => {
                this.parallax.scrollTo(1);
              }}
              // onMouseUp={() => this.queryClicked.set(false)}
              className="button1"
              // style={this.queryClicked.scale}
            >
              {/* Bronx Button */}
              <div>BRONX</div>
            </animated.button>

            <button
              onClick={() => {
                this.parallax.scrollTo(2);
              }}
              className="button2"
            >
              <div>MANHATTAN</div>
            </button>

            <button
              onClick={() => {
                this.parallax.scrollTo(3);
              }}
              className="button3"
            >
              <div>BROOKLYN</div>
            </button>

            <button
              onClick={() => {
                this.parallax.scrollTo(4);
              }}
              className="button4"
            >
              <div>QUEENS</div>
            </button>

            <button
              onClick={() => {
                this.parallax.scrollTo(5);
              }}
              className="button5"
            >
              <div>STATEN ISLAND</div>
            </button>

            <img
              src={arrow}
              width="100"
              height="100"
              alt=""
              className="button7"
              onClick={() => {
                this.parallax.scrollTo(6);
              }}
            />

            <button
              style={{ marginTop: "250px", marginLeft: "450px" }}
              onClick={() => {
                this.parallax.scrollTo(6);
              }}
              className="button6"
            >
              <div>INSPECT/SEARCH</div>
            </button>
          </ParallaxLayer>

          {/* CARDS */}

          <ParallaxLayer offset={6} speed={1.4}>
            <div className="card-scroll">
              <div className="text">INSPECT!</div>
              {this.state.data.map((data) => (
                <Cards data={data} className="ind" />
              ))}
            </div>
          </ParallaxLayer>

          {/* GRAPHS */}

          <ParallaxLayer offset={1} speed={1.5}>
            <div className="text"> BRONX </div>
            <BronxGraph />
            <div
              style={{ marginLeft: "-365px", marginTop: "630px" }}
              className="text"
            >
              {" "}
              Grade{" "}
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={1.5}>
            <div className="text"> MANHATTAN </div>
            <ManhattanGraph />
            <div
              style={{ marginLeft: "-365px", marginTop: "630px" }}
              className="text"
            >
              {" "}
              Grade{" "}
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={1.5}>
            <div className="text"> BROOKLYN </div>
            <BrooklynGraph />
            <div
              style={{ marginLeft: "-365px", marginTop: "630px" }}
              className="text"
            >
              {" "}
              Grade{" "}
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={1.5}>
            <div className="text"> QUEENS </div>
            <QueensGraph />
            <div
              style={{ marginLeft: "-365px", marginTop: "630px" }}
              className="text"
            >
              {" "}
              Grade{" "}
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={1.5}>
            <div className="text"> STATEN ISLAND </div>
            <SIGraph />
            <div
              style={{ marginLeft: "-365px", marginTop: "630px" }}
              className="text"
            >
              {" "}
              Grade{" "}
            </div>
          </ParallaxLayer>
        </Parallax>

        {/* RESTAURANT DATA IS BELOW*/}
        <section className="list"></section>
        <div className="tc bg-green ma0 pa4 min-vh-100">
          <search details={data} />
        </div>
      </div>
    );
  }
}

export default App;
