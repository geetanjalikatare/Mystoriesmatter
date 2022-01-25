import { Button, Grid } from "@mui/material";
import React from "react"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../../RecentlyPublished/components/Header/Header";
import LeftSidePanel from "../../RecentlyPublished/components/Leftsidepanel/LeftSidePanel";
import { fetchMemoryAsync } from "../../Redux/reducers/MemorySlice";
import Index from "./Index";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const dispatch = useDispatch();
  const largeScreen = useMediaQuery({ minWidth: 992 });
  useEffect(() => {
    const obj = {
      type: "feed",
      filter: {
        mystories: {
          me: 1,
          friend: 1,
          others: 1,
          groups: {
            1: 0,
            82: 0,
            136: 0,
            148: 0,
          },
        },
        save_filters: 0,
      },
      configurationTimestamp: "0",
      searchTerm: {
        prompt_pagination: 0,
        start: 0,
        length: 10,
        searchString: "",
        last_memory_date: "",
        request_type: "older",
      },
      randomPrompts: 0,
    };
    dispatch(fetchMemoryAsync(obj));
  }, [])
  return (
  <> <Header/>
  <Grid container style={{width:"100%",backgroundColor:"#e8f3f5"}}>
    {largeScreen &&<Grid item style={{marginTop:"5%"}}  md={3}>
    <LeftSidePanel/>
  </Grid> }
  
  <Grid item xs={12} md={9}>
<Index/>
  </Grid>
 
  </Grid>
 </>)
}
export default Home;