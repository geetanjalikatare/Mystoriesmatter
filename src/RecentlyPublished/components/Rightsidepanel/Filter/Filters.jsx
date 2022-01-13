import React, { useState } from "react";
import FilterButton from "./FilterButton";
import { useDispatch, useSelector } from "react-redux";
import { addFilter, selectFilters } from "../../../../Redux/reducers/MemorySlice";

const Filters = () => {
  const dispatch = useDispatch();
  const filterList = useSelector(selectFilters);
  const filters = ["All", "Me", "My Friends", "Non Friends"];
  const friendCircles = ["Close Friends", "CB"];
  const [filter, setFilter] = useState({
    All: 1,
    Me: 1,
    "My Friends": 1,
    "Non Friends": 1,
    "Close Friends": 1,
    CB: 1,
  });
  const checkAll = () => {
    if (
      filter.Me % 2 !== 0 &&
      filter["My Friends"] % 2 !== 0 &&
      filter["Non Friends"] % 2 !== 0 &&
      filter["Close Friends"] % 2 !== 0 &&
      filter["CB"] % 2 !== 0
    ) {
      return true;
    } else return false;
  };
  const checkMyfriends = () => {
    if (filter["Close Friends"] % 2 !== 0 && filter["CB"] % 2 !== 0) {
      return true;
    } else return false;
  };
  const selectFilter = (val) => {
    if (val === "All") {
      filter.All += 1;
      filter.Me += 1;
      filter["My Friends"] += 1;
      filter["Non Friends"] += 1;
      filter["Close Friends"] += 1;
      filter["CB"] += 1;
      setFilter({ ...filter });
    } else if (val === "Me") {
      filter.Me += 1;
      if (checkAll()) filter.All = 1;
      else filter.All = 2;
      setFilter({ ...filter });
    } else if (val === "My Friends") {
      filter["My Friends"] += 1;
      filter["Close Friends"] = filter["My Friends"];
      filter["CB"] = filter["My Friends"];
      if (checkAll()) filter.All = 1;
      else filter.All = 2;
      setFilter({ ...filter });
    } else if (val === "Non Friends") {
      filter["Non Friends"] += 1;
      if (checkAll()) filter.All = 1;
      else filter.All = 2;
      setFilter({ ...filter });
    } else if (val === "Close Friends") {
      filter["Close Friends"] += 1;
      if (checkMyfriends()) filter["My Friends"] = 1;
      else filter["My Friends"] = 2;
      if (checkAll()) filter.All = 1;
      else filter.All = 2;
      setFilter({ ...filter });
    } else if (val === "CB") {
      filter["CB"] += 1;
      if (checkMyfriends()) filter["My Friends"] = 1;
      else filter["My Friends"] = 2;
      if (checkAll()) filter.All = 1;
      else filter.All = 2;
      setFilter({ ...filter });
    }

    dispatch(addFilter(filter));
  };

  return (
    <>
      {filters.map((item, index) => {
        return (
          <FilterButton
            value={item}
            fun={() => selectFilter(item)}
            isClicked={filterList[item]}
            unique={(index + item).toString()}
          />
        );
      })}
      <p style={{ margin: "10px 0px 10px 0px" }}>Friend Circles</p>
      {friendCircles.map((item, index) => {
        return (
          <FilterButton
            value={item}
            fun={() => selectFilter(item)}
            isClicked={filterList[item]}
            unique={(index + item).toString()}
          />
        );
      })}
    </>
  );
};
export default Filters;
