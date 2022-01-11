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
      }}
    >
      <Button
        variant="text"
        style={{
          backgroundColor: "RGB(235, 93, 104)",
          color: "white",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
          height: "40px",
          width: "30%",
          fontSize: "14px",
        }}
      >
        Memory
      </Button>
      <input
        type="text"
        style={{ height: "32px", width: "55%", border: "1px solid white" }}
        placeholder="Search memory..."
      ></input>
      <Button style={{ color: "black" }}>
        <SearchIcon />
      </Button>
    </Box>
  );
};
export default Search;
