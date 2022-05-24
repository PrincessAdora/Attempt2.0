import { React, useState } from "react";
import data from "./ListData.js";

function List(props) {
  //create a new array by filtering the original array
  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      console.log(el.dba);
      return el.dba.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.dba}>{item.dba}</li>
      ))}
    </ul>
  );
}

export default List;
