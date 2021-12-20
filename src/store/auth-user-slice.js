import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authedUser: null
};

const authUserSlice = createSlice({
    name: 'auth-user',
    initialState,
    reducers: {
        authUser(state, action) {
            state.authedUser = action.payload;
        },
        logout(state) {
            state.authedUser = null;
        }
    }
});
export const authUserActions = authUserSlice.actions;
export default authUserSlice;