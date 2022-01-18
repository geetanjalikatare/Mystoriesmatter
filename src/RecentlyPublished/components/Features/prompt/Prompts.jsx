import React from "react";
import Prompt from "./Prompt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Prompts = ({ data }) => {
  var count = 0;
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{
        border: "1px solid green",
        borderRadius: "10px",
        backgroundColor: "#70a887",
        height: "183px",
        padding: "10px 50px 10px 75px",
      }}
    >
      <div className="carousel-inner">
        {Object.keys(data).map((i, index) => {
          count++;
          return (
            <div
              className={
                count === 1 ? "carousel-item active" : "carousel-item "
              }
            >
              <Prompt value={data[i]} />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <div
          style={{
            borderRadius: "25px",
            color: "#2d7ca7",
            padding: "5px",
            backgroundColor: "white",
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
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <div
          style={{
            borderRadius: "25px",
            color: "#2d7ca7",
            padding: "5px",
            backgroundColor: "white",
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
