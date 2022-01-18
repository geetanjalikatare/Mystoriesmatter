import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleLike, handleUnLike,  RecentPublishedApi } from "../../api/api";

export const fetchMemoryAsync = createAsyncThunk(
  "memory/recentPublishedApi",
  async (obj) => {
    const response = await RecentPublishedApi(obj);
    return response;
  }
);
export const LikeMemoryAsync = createAsyncThunk(
  "memory/handleLike",
  async (obj) => {
    const response = await handleLike(obj);
    return response;
  }
);
export const UnLikeMemoryAsync = createAsyncThunk(
  "memory/handleUnLike",
  async (obj) => {
    const response = await handleUnLike(obj);
    return response;
  }
);

const initialState = {
  data: [],
   status: "",
   page:0,
  filters: {
    All: 1,
    Me: 1,
    "My Friends": 1,
    "Non Friends": 1,
    "Close Friends": 1,
    CB: 1,
  },
};

export const MemorySlice = createSlice({
  name: "memory",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      Object.keys(action.payload).map((item) => {
        if (action.payload[item] % 2 !== 0) {
          state.filters[item] = 1;
        } else {
          state.filters[item] = 0;
        }
      });
    },
    EmptyMemoryData: (state) => {
      state.data.length = 0;
      state.page=0;
    },
    pageCounter :(state)=>{
      state.page+=1;
    }

    
  },
  extraReducers: {
    [fetchMemoryAsync.pending]: (state) => {
      state.status = "loading";
    },
    [fetchMemoryAsync.fulfilled]: (state, action) => {
      state.status = "idle";
      state.data = [...state.data, ...action.payload];
    },
    [fetchMemoryAsync.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    
  },
});

export const { addFilter, EmptyMemoryData,pageCounter } = MemorySlice.actions;
export const selectData = (state) => state.memory.data;
export const selectFilters = (state) => state.memory.filters;
export const selectPage = (state) => state.memory.page;
export default MemorySlice.reducer;
