import React from "react"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMemoryAsync } from "../../Redux/reducers/MemorySlice";

const Home = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
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
    },[])
    return(<h1>
        home page
    </h1>)
}
export default Home;