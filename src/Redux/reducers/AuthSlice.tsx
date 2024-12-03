import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const FetchData = createAsyncThunk("auth/fetchdata", async (data) => {
    return data;
});

const initialState = {

}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FetchData.fulfilled, (state, action) => {
        });
        builder.addCase(FetchData.rejected, (state, action) => {
        });
        builder.addCase(FetchData.pending, (state, action) => {
            return action.payload;
        })
    }
});