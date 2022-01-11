import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AddComment, GetComments } from "../../api/api";

export const fetchCommentsAsync = createAsyncThunk(
  "comment/GetComments",
  async (obj) => {
    const response = await GetComments(obj);
    return response;
  }
);
export const addCommentAsync = createAsyncThunk(
  "comment/AddComment",
  async (obj) => {
    const response = await AddComment(obj);
    return response;
  }
);

const initialState = {
  value: 0,
  comments: [],
  status: "idle",
  dummyData:""
};

export const CommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    commentCounter: (state) => {
      state.value += 1;
    },
    addDummyComment :(state,action) =>{
      state.dummyData=action.payload
    }
  },
  extraReducers: {
    [fetchCommentsAsync.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCommentsAsync.fulfilled]: (state, action) => {
      state.status = "idle";
      state.comments=action.payload;
    },
    [fetchCommentsAsync.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { commentCounter,addDummyComment } = CommentSlice.actions;
export const selectCount = (state) => state.comment.value;
export const selectComments = (state) => state.comment.comments;
export const selectDummyComment=(state) =>state.comment.dummyData;

export default CommentSlice.reducer;
