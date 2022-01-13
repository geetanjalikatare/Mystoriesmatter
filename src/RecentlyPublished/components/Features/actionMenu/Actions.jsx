import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useMediaQuery } from "react-responsive";

const Actions = ({ data }) => {
  const XtraSmall = useMediaQuery({ maxWidth: 772 });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {XtraSmall ? (
        <Button onClick={handleClick}>
          <MoreVertIcon style={{ color: "#2dafc0" }} />
        </Button>
      ) : (
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{
            border: "1px solid RGB(45, 125, 165)",
            color: "RGB(45, 125, 165)",
          }}
        >
          Action {anchorEl ? <ArrowDropUp /> : <ArrowDropDown />}
        </Button>
      )}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {Object.keys(data).map((i, index) => {
          return (
            <MenuItem onClick={handleClose} key={index}>
              {data[i]}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
export default Actions;
