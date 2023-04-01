import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Posts/postSlice";
import topicReducer from "./Topics/topicsSlice";
export const store = configureStore({
  reducer: {
    posts: postReducer,
    topics: topicReducer,
  },
});
