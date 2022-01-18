import React, { useEffect, useState,useRef } from "react";
import { Grid, Box } from "@mui/material";
import Header from "./Header/Header";
import { useMediaQuery } from "react-responsive";
import FilterBox from "./Rightsidepanel/Filter/FilterBox";
import { useDispatch, useSelector } from "react-redux";
import {
  EmptyMemoryData,
  fetchMemoryAsync,
  selectData,
  selectFilters,
} from "../../Redux/reducers/MemorySlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@mui/material";
import Card from "./Card/Card";
import RightSidePanel from "./Rightsidepanel/RightSidePanel";
import LeftSidePanel from "./Leftsidepanel/LeftSidePanel";
import { selectCount } from "../../Redux/reducers/CommentSlice";

function Main() {
  const largeScreen = useMediaQuery({ minWidth: 992 });
  const smallScreen = useMediaQuery({ maxWidth: 991 });
  const [page, setPage] = useState(1);
  const filters = useSelector(selectFilters);
  const MemoryData = useSelector(selectData);
  const dispatch = useDispatch();
  const obj = {
    type: "feed",
    filter: {
      mystories: {
        me: filters["Me"],
        friend: filters["My Friends"],
        others: filters["Non Friends"],
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
      start: page,
      length: 10,
      searchString: "",
      last_memory_date: "",
      request_type: "older",
    },
    randomPrompts: 0,
  };
  const fetchMoreData = () => {
    dispatch(fetchMemoryAsync(obj)).then(() => {
      setPage(page + 1);
    });
  };
  const count = useSelector(selectCount);
  const firstUpdate = useRef(true);
  useEffect(() => {
    setPage(1);
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    else{
      const Newobj = {
        type: "feed",
        filter: {
          mystories: {
            me: filters["Me"],
            friend: filters["My Friends"],
            others: filters["Non Friends"],
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
      dispatch(EmptyMemoryData());
      dispatch(fetchMemoryAsync(Newobj))
    }

  },[filters,count]);
  return (
    <Box style={{ width: "100%" }}>
      <Header />
      {smallScreen && <FilterBox />}
      <Grid
        container
        style={{
          width: "100%",
          backgroundColor: "#e6f3f4",
          paddingTop: "120px",
        }}
      >
        {largeScreen && (
          <Grid item md={2}>
            <LeftSidePanel />
          </Grid>
        )}
        <Grid item xs={12} md={7}>
          <Box
            style={{
              width: "100%",
              padding: "0 2% 0 2%",
            }}
          >
            <InfiniteScroll
              dataLength={MemoryData.length}
              next={fetchMoreData}
              hasMore={true}
              scrollThreshold={0.2}
              loader={
                <CircularProgress
                  color="inherit"
                  style={{
                    position: "absolute",
                    marginLeft: "20%",
                  }}
                />
              }
            >
              {MemoryData.map((item, index) => {
                return <Card data={item} key={index} />;
              })}
            </InfiniteScroll>
          </Box>
        </Grid>
        {largeScreen && (
          <Grid item md={2}>
            <RightSidePanel />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default Main;
