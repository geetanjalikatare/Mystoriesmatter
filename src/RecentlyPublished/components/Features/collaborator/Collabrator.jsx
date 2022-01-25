import { Avatar, Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Collabrator = ({ collab, authorColor }) => {
  const [show, setShow] = useState(0);
  return (
    <Box style={{ paddingBottom: "20px" }}>
      <Button
        onClick={() => {
          setShow(show + 1);
        }}
      >
        Hide Collabrator (1) ^
      </Button>
      {collab.map((item) => {
        return (
          <p style={{ display: show % 2 === 0 ? "" : "none" }}>   <Avatar
            style={{ width: "30px", height: "30px", display: "inline-block" }}
            alt="Remy Sharp"
            src={item.uri}
          ></Avatar> <span style={{
            backgroundColor: authorColor[item.uid],
            height: "30px",
          }}>{item.field_first_name_value} {item.field_last_name_value}</span></p>
        );
      })}
    </Box>
  );
};
export default Collabrator;
