import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./components/List";
import search from "./search.css";

function Search() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1>Zipcode Search </h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} datatwo={this.props.data} />
      />
    </div>
  );
}

export default Search;
