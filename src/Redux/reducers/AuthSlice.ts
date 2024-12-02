import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("auth/fetchData", async (email: string) => {
    if (typeof window === 'undefined') return;
    axios.get(`${window.location.origin}/api/auth?email=${email}&subscription=true`).then((res) => {
        return res.data;
    })
})

const initialState = {}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(fetchData.fulfilled, (state, action) => { });
        builder.addCase(fetchData.pending, (state, action) => { });
        builder.addCase(fetchData.rejected, (state, action) => { });
    },
});