import React from "react";
import Prompt from "./Prompt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useSelector } from "react-redux";
import { selectPrompts } from "../../../../Redux/reducers/MemorySlice";

const Prompts = ({ data, limit }) => {
  const promptList = useSelector(selectPrompts);
  const isData = data ? true : false
  const list = data ? data : promptList;

  return (
    <div
      id={`carouselExampleControls-${limit}`}
      className="carousel slide"
      data-bs-ride="carousel"
      style={{
        border: "1px solid green",
        borderRadius: "8px",
        backgroundColor: "#70a887",
        height: "180px",
        padding: "1% 11% 1% 11%",
        margin: "2% 0% 2% 0%"
      }}
    >
      {isData && <div className="carousel-inner">
        {Object.keys(list).map((i, index) => {
          return (
            <div
              className={
                index + 1 === 1 ? "carousel-item active" : "carousel-item "
              }
            >
              <Prompt value={list[i]} />
            </div>
          );
        })}
      </div>}
      {!isData && <div className="carousel-inner">
        {Object.keys(list)
          .filter((i, index) => index + 1 <= limit && index + 1 > limit - 3)
          .map((i, index) => {
            return (
              <div
                className={
                  index % 3 === 0 ? "carousel-item active" : "carousel-item"
                }
              >
                <Prompt value={list[i]} />
              </div>
            );
          })}
      </div>
      }
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#carouselExampleControls-${limit}`}
        data-bs-slide="prev"
      >
        <div
          style={{
            borderRadius: "25px",
            color: "#2d7ca7",
            padding: "5px",
            backgroundColor: "white"
          }}
        >
          <span aria-hidden="true">
            {" "}
            <ArrowBackIosNewIcon />
          </span>
          <span className="visually-hidden">Previous</span>
        </div>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carouselExampleControls-${limit}`}
        data-bs-slide="next"
      >
        <div
          style={{
            borderRadius: "25px",
            color: "#2d7ca7",
            padding: "5px",
            backgroundColor: "white"
          }}
        >
          <span aria-hidden="true">
            <ArrowForwardIosIcon />
          </span>
          <span className="visually-hidden">Next</span>
        </div>
      </button>
    </div>
  );
};
export default Prompts;
