import { Box } from "@mui/material";
import React from "react";
import Menu from "./Menu";

const LeftSidePanel = () => {
  return (
    <Box style={{ position: "fixed" }}>
      <Menu />
    </Box>
  );
};
export default LeftSidePanel;
