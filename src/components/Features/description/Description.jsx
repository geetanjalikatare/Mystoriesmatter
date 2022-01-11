import {  Typography } from "@mui/material";
import React from "react";

const Description = ({ data }) => {
  
  return (
    <>
      <Typography
        style={{ height: "108px", overflow: "hidden" }}
        dangerouslySetInnerHTML={{ __html: data }}
      >   
      </Typography>
      {data.length>352 &&<a href="##" style={{color:"RGB(45, 125, 165)"}}>See more</a> }
    </>
  );
};
export default Description;
