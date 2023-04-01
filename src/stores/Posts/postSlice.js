import { createSlice } from "@reduxjs/toolkit";
export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: undefined,
  },
  reducers: {
    setPostList(state, action) {
      if (action.payload) {
        state.posts = action.payload;
      }
    },
  },
});

export const { setPostList } = postSlice.actions;
export const post = (state) => state.posts.posts;
export default postSlice.reducer;
