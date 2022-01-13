import React, { useState } from "react";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import {
  LikeMemoryAsync,
  UnLikeMemoryAsync,
} from "../../../../Redux/reducers/MemorySlice";

const Like = ({ uid, nid, likeCount, attr_id, type }) => {
  const XtraSmall = useMediaQuery({ maxWidth: 767 });
  const dispatch = useDispatch();
  const [click, setClick] = useState(likeCount); 

  const data = {
    details: {
      nid: nid,
      attr_id: attr_id,
      to_uid: uid,
      type: "my_stories",
      like_type: type,
    },
  };
  const handleLike = () => {
    dispatch(LikeMemoryAsync(data));
  };
  const handleUnLike = () => {
    dispatch(UnLikeMemoryAsync(data));
  };
  const handleClick = (e) => {
    e.preventDefault();
    click % 2 !== 0 ? handleUnLike() : handleLike();
  };

  return (
    <Button
      style={{
        border:
          type === "comment" || XtraSmall ? " " : "1px solid RGB(45, 125, 165)",
        color: "RGB(45, 125, 165)",
      }}
      onClick={(e) => {
        setClick(click + 1); 
        handleClick(e);
      }}
    >
   
      {click % 2 === 0 ? <FavoriteBorderIcon /> : <FavoriteIcon />}
      {XtraSmall ? "" : click % 2 === 0 ? "Like" : "Liked"}
    </Button>
  );
};
export default Like;
