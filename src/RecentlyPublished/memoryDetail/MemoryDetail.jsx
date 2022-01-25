import { Grid,Box,Paper } from "@mui/material";
import React from "react"
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";

const MemoryDetail = ()=>{
    const { state } = useLocation();
    const navigate = useNavigate()
    console.log(state)

return (
    <>
    <Header/>
    <Grid container>
<Grid item>
<Box
      style={{
        paddingBottom: "10px",
        marginTop:"150px",
         width:"100%",
         margin:"0 auto"      
      }}
    >
      <Paper
        style={{
          width: "100%",
          padding: "3%",
          borderRadius: "10px",
        }}
      ><p>memory detail page</p>
          </Paper></Box>
</Grid>
<Grid item></Grid>
    </Grid></>
)
}
export default MemoryDetail;