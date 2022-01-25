import { Box, Button, Grid } from "@mui/material";
import React from "react";
import "./Header.css";
import { useMediaQuery } from "react-responsive";
import HeaderMenu from "./HeaderMenu";
import Search from "../Features/search/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import { Logout } from "../../../api/api";
import LogoutIcon from '@mui/icons-material/Logout';
const Header = () => {
  const smallScreen = useMediaQuery({ maxWidth: 991 });
  const largeScreen = useMediaQuery({ minWidth: 992 });

  const logout = (e) => {
    Logout();
    localStorage.clear();
    window.location.reload()
  }

  return (
    <Box
      style={{
        backgroundColor: "RGB(46, 180, 195)",
        height: "60px",
        padding: "12px 12px 12px 0px",
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 200000,
      }}
    >
      <Grid container style={{}}>
        <Grid item xs={4} md={2}>
          <span>
            {smallScreen && <HeaderMenu />}
            <img
              width="115px"
              style={{ paddingLeft: largeScreen && "20px" }}
              alt="my stories matter"
              src="https://mystoriesmatter.com/sites/mystoriesmatter.com/default/files//instance_files/header_logo/header-logo-12628.png"
            />
          </span>
        </Grid>
        <Grid item md={6}>
          {largeScreen && <Search />}
        </Grid>
        <Grid item xs={8} md={4}>
          <span
            style={{
              color: "white",
              float: "right",
            }}
          >
            <HelpOutlineIcon
              style={{ height: "33px", width: "33px", marginLeft: "20px" }}
            />
            <span style={{ fontSize: "1.6rem", marginLeft: "20px" }}>
              A<span style={{ fontSize: "1.3rem" }}>A</span>
            </span>
            <WbIncandescentIcon
              style={{
                height: "33px",
                width: "33px",
                transform: "rotate(180deg)",
                marginLeft: "20px",
              }}
            />
            <LocalPostOfficeIcon
              style={{ height: "33px", width: "33px", marginLeft: "20px" }}
            />
            <Button style={{ color: "white" }} onClick={logout}>{smallScreen ? <LogoutIcon /> : "Logout"}</Button>
          </span>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
