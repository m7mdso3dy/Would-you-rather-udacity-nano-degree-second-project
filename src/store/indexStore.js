import { configureStore } from "@reduxjs/toolkit";
import authUserSlice from "./auth-user-slice";
import questionsSlice from "./questions-slice";
import usersSlice from "./users-slice";
const store = configureStore({
    reducer: {
        authedUser: authUserSlice.reducer,
        users: usersSlice.reducer,
        questions:questionsSlice.reducer

    }
});
export default store;