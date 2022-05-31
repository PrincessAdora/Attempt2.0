import styles from "./styles.css";
import React, { Component } from "react";
import {
  Parallax,
  ParallaxLayer,
  IParallax,
  useSpring
} from "@react-spring/parallax";
import { BubbleChart } from "reaviz";
import Navbar from "./components/NavBar";
import Footer from "./components/footer";
import IntroPage from "./components/IntroPage";
// import Scroll from "./components/Scroll";
import Page from "./components/Page";
import { render } from "react-dom";
import { useState } from "react";
import Graph from "./components/Graph";
import Search from "./search";
import Cards from "./components/Cards";
import EndPage from "./components/EndPage";
//import Resturant from "./components/Resturant";
import "./search.css";

//<a href="https://www.vecteezy.com/free-vector/city-perspective">City Perspective Vectors by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-vector/street">Street Vectors by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-vector/bridge">Bridge Vectors by Vecteezy</a>

// import { IParallax } from "@react-spring/web";
// import { animated, useSpring } from "react-spring";

// const Page = ({ offset, color }) => (
//   <>
//     {/* add reusable layers here as Page component*/}

//     {/*Background Parallax layer -- behind all other layers */}
//     <ParallaxLayer offset={offset} speed={1}>
//       <div className="background"></div>
//     </ParallaxLayer>

//     {/*Color Parallax Layer -- over background layer */}
//     <ParallaxLayer offset={offset} speed={2.1}>
//       <div className={`shape ${color}`} />
//     </ParallaxLayer>

//     {/*Text Parallax Layer -- over color and backgronund layers */}
//     <ParallaxLayer offset={offset} speed={1}>
//       <div className="text">
//         <span>Restaurant Reviews</span>
//       </div>
//     </ParallaxLayer>

//     {/*Navbar Parallax layer -- behind all other layers */}

//     <ParallaxLayer offset={offset} speed={3.5}>
//       <Navbar />
//     </ParallaxLayer>
//   </>
// );

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
      "https://data.cityofnewyork.us/resource/43nn-pn8j.json?$$app_token=Ee7bibJxma3jcUJjogz19BnXK&$limit=40"
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

    //    this.state.data.map((application) => (

    //       application.dba:application.zipcode:application.grade:
    //       application.cuisine_description

    // ))}
  };

  render() {
    const { dataIsLoaded, data } = this.state;

    return (
      <div>
        <Parallax pages={6} className="container" horizontal>
          <IntroPage offset={0} color="light" />
          <Page offset={1} color="light" />
          <Page offset={2} color="mid" />
          <Page offset={3} color="dark" />
          <Page offset={4} color="darker" />
          <EndPage offset={4.99} color="light" />

          <ParallaxLayer offset={4.99} speed={1.4}>
            <div className="card-scroll">
              {this.state.data.map((data) => (
                <Cards data={data} className="ind" />
              ))}
            </div>
          </ParallaxLayer>
        </Parallax>

        {/* <Scroll
          data={this.state.data}
          RestaurantData={this.state.data.map((application) => (
            <li>
              {application.dba}:{application.zipcode}:{application.grade}:
              {application.cuisine_description}
            </li>
          ))}
        /> */}
        {/* RESTAURANT DATA IS BELOW*/}
        <section className="list">
          {/* {this.state.data.map((application) => (
          <li>
     {application.dba}:{application.zipcode}:{application.grade}:
     {application.cuisine_description}
          </li> 
 ))} */}
          {/* <Search data={this.state.data} /> */}
        </section>
      </div>
    );
  }
}

export default App;
