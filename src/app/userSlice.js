import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const users_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = [];
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(users_URL);
        return [...response.data];
    } catch (err) {
        return err.message
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducer: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;