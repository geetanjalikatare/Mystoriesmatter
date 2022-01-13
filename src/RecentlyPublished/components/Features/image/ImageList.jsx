import React from "react";

export default function StandardImageList({ data }) {
  var width = "";
  if (data.length === 1) width = "97%";
  else if (data.length === 2) width = "45%";
  else width = "30%";
  return (
    <>
      {data.map((item, index) => {
        if (index + 1 <= 3) {
          return (
            <img
            height="auto"
            width="30%"
              key={index}
              src={item.url}
              alt={item.file_title}
              style={{
               
                borderRadius: "10px",
                marginLeft: "10px",
              }}
            ></img>
          );
        }
      })}
    </>
  );
}
