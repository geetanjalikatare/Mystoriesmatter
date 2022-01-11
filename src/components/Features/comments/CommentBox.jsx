import { Button, TextareaAutosize } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addCommentAsync,
  commentCounter,
} from "../../../Redux/reducers/CommentSlice";

const CommentBox = ({ nid, name }) => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const obj = {
    details: {
      nid: nid,
      type: "my_stories",
      comment: data,
    },
  };

  const handlePost = (e) => {
    e.preventDefault();
    dispatch(commentCounter());
    dispatch(addCommentAsync(obj)).then(() => {
      setData(" ");
    });
  };
  return (
    <>
      <TextareaAutosize
        min={4}
        style={{
          width: "100%",
          height: "118px",
          borderRadius: "6px",
          border: "1px solid lightgrey",
        }}
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
        placeholder="Your Comment..."
      />
      <Button
        style={{
          float: "right",
          backgroundColor: "RGB(238, 150, 163)",
        }}
        variant="contained"
        onClick={(e) => {
          handlePost(e);
        }}
      >
        {" "}
        <SendIcon /> Post
      </Button>
    </>
  );
};
export default CommentBox;
