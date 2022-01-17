import { Box, Button } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../../Header/Header.css";
const Search = () => {
  return (
    <Box
      style={{
        borderRadius: "25px",
        width: "100%",
        backgroundColor: "white",
        height:"80%",
      }}
    >
      <Button
        variant="text"
        style={{
          backgroundColor: "RGB(235, 93, 104)",
          color: "white",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
          height: "100%",
          width: "20%",
          fontSize: "0.7em",
        }}
      >
        Memory
      </Button>
      <input
        type="text"
        style={{ width: "55%", border: "1px solid white" }}
        placeholder="Search memory..."
      ></input>
      <Button style={{ color: "black",float:"right" }}>
        <SearchIcon />
      </Button>
    </Box>
  );
};
export default Search;
