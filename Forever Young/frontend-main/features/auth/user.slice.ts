import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./user.service";
import { UserSliceInitialState } from "../../types/types";

const initialState: UserSliceInitialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, thunkAPI) => {
    try {
      return await userService.fetchUser();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, thunkAPI) => {
    try {
      return await userService.logoutUser();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(fetchUser.rejected, (state, { payload }) => {
      state.message = payload as string;
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, { payload }) => {
      state.user = null;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(logoutUser.rejected, (state, { payload }) => {
      state.message = payload as string;
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
