import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postList: []
}
const postSlice = createSlice(
    {
        name: "PostList",
        initialState,
        reducers: {
            getPostListAPI(state, action) {
                state.postList = action.payload;
            },


        }
    }
)
export const { getPostListAPI } = postSlice.actions;
export default postSlice.reducer;