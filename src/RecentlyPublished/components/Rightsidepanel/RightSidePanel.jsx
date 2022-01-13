import { Box } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Filters from "./Filter/Filters";

const RightSidePanel = () => {
  const [open, setOpen] = useState(1);

  return (
    <Box style={{ position: "fixed" }}>
      <h6
        onClick={() => {
          setOpen(open + 1);
        }}
        style={{ marginBottom: "20px" }}
      >
        Filters{" "}
        <ArrowForwardIosIcon
          style={{
            transform: open % 2 === 0 ? "rotate(267deg)" : "rotate(90deg)",
          }}
        />
      </h6>
      {open % 2 !== 0 && <Filters />}
    </Box>
  );
};
export default RightSidePanel;
