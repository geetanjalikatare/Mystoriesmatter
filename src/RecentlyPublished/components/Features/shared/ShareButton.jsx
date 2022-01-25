import React, { useState } from "react";
import { Button } from "@mui/material";

const ShareButton = ({shareOption,shareCount}) =>{
    let value="";
    let color="";
    if(shareOption==="cueback" && !shareCount){
        value="Shared with All Members"
        color="#be6767"
    }
    else if(shareCount){
        value="Shared with"+shareCount+" Members";
        color="#2177b1"
    }
    else{
        value="Shared with only me";
        color="RGB(80, 182, 96)"
    }
   
  
    return(
        <Button
        variant="contained"
        style={{
          backgroundColor:color,
          borderRadius: "15px",
          height: "35%",
          fontSize:"0.7rem",
          padding:"2%"
        }}
      >
      {value}
      </Button>
    )
}
export default ShareButton;