import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LoginApi } from "../../api/api";

export const LoginAsync = createAsyncThunk(
  "login/LoginApi",
  async (obj) => {
    const response = await LoginApi(obj);
    return response;
  }
);

const initialState = {
LoginResponse:{},
state:"idle"
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: {
    [LoginAsync.pending]: (state) => {
      state.status = "loading";
    },
    [LoginAsync.fulfilled]: (state, action) => {
      state.status = "idle";
      state.LoginResponse=action.payload;
    },
    [LoginAsync.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const selectLoginResponse=(state) =>state.login.LoginResponse;
export const selectStatus = (state) => state.login.status;

export default LoginSlice.reducer;
