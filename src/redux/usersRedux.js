import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        isFeteching: false,
        error: false
    },
    reducers: {
        getUsersStart: (state) => {
            state.isFeteching = true;
            state.error = false;
        },
        getUsersSuccess: (state, action) => {
            state.users = action.payload;
            state.isFeteching = false;
            state.error = false;
        },
        getUsersFailure: (state) => {
            state.isFeteching = false;
            state.error = true;
        },
        addUserStart: (state) => {
            state.isFeteching = true;
            state.error = false;
        },
        addUserSuccess: (state, action) => {
            state.users.push(action.payload);
            state.isFeteching = false;
            state.error = false;
        },
        addUserFailure: (state) => {
            state.isFeteching = false;
            state.error = true;
        }
    }
});

export const {
    getUsersStart,
    getUsersSuccess,
    getUsersFailure,
    addUserStart,
    addUserSuccess,
    addUserFailure
} = usersSlice.actions;
export default usersSlice.reducer;