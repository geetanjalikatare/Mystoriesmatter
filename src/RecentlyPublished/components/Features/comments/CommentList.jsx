import React from "react";
import Comment from "./Comment";

const Comments = ({ data }) => {

  return (
    <>
      {data.map((item, index) => {
        return <Comment commentData={item} index={index}/>;
      })}
    </>
  );
};
export default Comments;
