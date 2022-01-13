import { Box, Button, Paper } from "@mui/material";
import React, { useState } from "react";
import Filters from "./Filters";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const FilterBox = () => {
  const [open, setOpen] = useState(0);
  return (
    <Box
      style={{
        backgroundColor: "white",
        width: "100%",
        marginTop: "60px",
        position: "fixed",
        zIndex: "100000",
      }}
      onClick={() => {
        setOpen(open + 1);
      }}
    >
      <Button style={{ color: "black", fontWeight: "bolder" }}>filters</Button>
      <Button style={{ float: "right", color: "black" }}>
        {open % 2 !== 0 ? <HighlightOffIcon /> : <FilterAltIcon />}
      </Button>

      <Box
        style={{
          borderTop: "1px solid lightgrey",
          width: "100%",
          height: "150px",
          position: "fixed",
          display: open % 2 !== 0 ? "" : "none",
          overflow: "auto",
        }}
      >
        <Paper
          style={{
            width: "100%",
            padding: "2%",
          }}
        >
          <Filters />
        </Paper>
      </Box>
    </Box>
  );
};
export default FilterBox;
