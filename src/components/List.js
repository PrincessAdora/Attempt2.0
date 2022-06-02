import { React, useState } from "react";
import data from "./ListData.js";

function List(props) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.dba}</li>
      ))}
    </ul>
  );
}

export default List;
