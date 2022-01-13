import { Button } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const FilterButton = ({ value, fun ,isClicked,unique}) => {
  return (
    <Button
      variant="contained"
      key={unique}
      style={{
        borderRadius: "25px",
        backgroundColor: isClicked  === 1? "#207d88" : "white",
        color: isClicked  === 1 ? "white" : "black",
        fontSize: "0.7rem",
        margin: "5px",
        padding: "2px 6px 2px 8px",
        textAlign: "center",
        border: isClicked  === 1 ? "" : "1px solid black",
      }}
      onClick={() => {
        fun();
      }}
    >
      {value} {isClicked  === 1 ? <CheckIcon   key={unique}/> : ""}
    </Button>
  );
};
export default FilterButton;
