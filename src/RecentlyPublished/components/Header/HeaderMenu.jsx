import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Paper } from "@mui/material";
import Menu from "../Leftsidepanel/Menu";
import Search from "../Features/search/Search";
const HeaderMenu = () => {
  const [click, setClick] = useState(0);
  return (
    <>
      <Button
      style={{color:"white"}}
        onClick={() => {
          setClick(click + 1);
        }}
      >
        <MenuIcon />
      </Button>
      <Box
        style={{
          display: click % 2 !== 0 ? "" : "none",
          width: "100%",
          position: "fixed",
          zIndex:100000
        }}
      >
        <Paper
          style={{
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <Search />
          <Menu />
        </Paper>
      </Box>
    </>
  );
};
export default HeaderMenu;
