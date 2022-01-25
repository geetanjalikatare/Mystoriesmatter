import { Box, Button, Grid, Paper, Typography, Avatar } from "@mui/material";
import React, { Suspense, lazy } from "react";
import {
  DateRange,
  ContentCopy,
  Attachment,
  LocationOn,
} from "@mui/icons-material";
import Prompts from "../Features/prompt/Prompts";
import { dateConverter } from "../util/functions";
import CommentList from "../Features/comments/CommentList";
import Collection from "../Features/collection/Collection";
import Collabrator from "../Features/collaborator/Collabrator";
import Like from "../Features/like/Like"
import CommentBox from "../Features/comments/CommentBox";
import Description from "../Features/description/Description";
import ShareButton from "../Features/shared/ShareButton";
const ImageList = lazy(() => import("../Features/image/ImageList"))
const Actions = lazy (()=>import ("../Features/actionMenu/Actions"))


const Card = ({ data, index }) => {
  console.log(data)
  return (
    <Box
      style={{
        paddingBottom: "10px",
        marginTop: "15px",
        width: "100%",
        margin: "0 auto"
      }}
    >
      <Paper
        style={{
          width: "100%",
          padding: "3%",
          borderRadius: "10px",
        }}
      >
        <Grid
          container
          style={{ borderBottom: "1px solid lightgrey" }}
        >
          <Grid item xs={2} md={1}>
            <Avatar
              style={{ width: "49px", height: "50px" }}
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
          </Grid>
          <Grid item xs={8} md={9}>
            <Typography>
              By{" "}
              <a href="##" style={{ fontSize: "0.8em", color: "#3279a0", fontWeight: "bold" }}>
                {data.user_details?.field_first_name_value}{" "}
                {data.user_details?.field_last_name_value}
              </a>{" "}
              on {dateConverter(data.updated).date}{" "}
              {dateConverter(data.updated).month}
            </Typography>
            <ShareButton shareOption={data.share_option_value} shareCount={data.share_count} />
          </Grid>
          <Grid item xs={2} md={2}>
            <Suspense fallback={<p>loading....</p>}>
            <Actions data={data.actions_on_memory} /></Suspense>
          </Grid>
        </Grid>
        <Box
          style={{
            paddingTop: "10px",
            paddingBottom: "10px",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <Typography
            style={{
              color: "#3279a0",
              fontWeight: "bold",
              fontSize: "1.2em",
              textDecoration: "underline",
            }}
            variant="h5"
          >
            {data.title}
          </Typography>
          <Typography>
            <DateRange />
            {dateConverter(data.memory_date).month}{" "}
            {dateConverter(data.memory_date).year}
            {"     "} <LocationOn />
            {data.location}
          </Typography>
        </Box>
        <Box
          style={{ paddingBottom: "40px", borderBottom: "1px solid lightgrey" }}
        >
          <Typography>
            {data.mins_to_read !== "" && (
              <i style={{ paddingBottom: "20px" }}>
                {"<"} {data.mins_to_read}
              </i>
            )}
          </Typography>
          <>
            {data.collection_name && (
              <Collection value={data.collection_name} />
            )}
          </>
          <>
            {data.collaborators.length > 0 && (
              <Collabrator
                collab={data.collaborators}
                authorColor={data.author_color_mapping}
              />
            )}
          </>
          <Description data={data.description} />
          {data.images && (
            <Box style={{ marginTop: "30px" }}>
              <Suspense fallback={<div>loading .....</div>}>
                <ImageList data={data.images} /></Suspense>
            </Box>
          )}
        </Box>
        <Grid
          container
          style={{
            borderBottom: "1px solid lightgrey",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Grid item xs={7}>
            <>
              {data.is_comment_allowed
                ? `${data.comments_count} Comments ${" "}`
                : " "}
              {data.like_comment_data.like_count && <a href="##"> Likes</a>}
              {data.attachment_count > 0 && (
                <a href="##">
                  <Attachment
                    style={{ transform: "rotate(150deg)", width: "25px" }}
                  />
                  {data.attachment_count}
                </a>
              )}
            </>
          </Grid>
          <Grid item xs={5} style={{ paddingLeft: "69px" }}>
            <Like
              uid={data.user_details.uid}
              nid={data.nid}
              likeCount={data.like_comment_data.like_flag}
              type="node"
              attr_id="0"
            />
            <Button
              style={{
                border: " 1px solid RGB(45, 125, 165)",
                color: "RGB(45, 125, 165)",
                fontSize: "0.7rem"
              }}
            >
              {" "}
              <ContentCopy />
              Copy Link
            </Button>
          </Grid>
        </Grid>
        <>
          <CommentList data={data.comments} />
        </>
        {data.is_comment_allowed ? (
          <Grid container style={{ paddingTop: "20px" }}>
            <Grid item xs={2} md={1}>
              <Avatar
                style={{ width: "40px", height: "40px" }}
                alt="Remy Sharp"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              />
            </Grid>

            <Grid item xs={10} md={11}>
              <CommentBox nid={data.nid} name={data.field_first_name_value} />
            </Grid>
          </Grid>
        ) : null}
        {data.prompts && (
          <Box style={{ paddingTop: "20px" }}>
            <Prompts data={data.prompts.random_prompt_data} />
          </Box>
        )}
      </Paper>
      {(index + 1) % 3 === 0 && <Prompts limit={index + 1} />}
    </Box>
  );
};
export default Card;
