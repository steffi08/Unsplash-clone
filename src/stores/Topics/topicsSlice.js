import { createSlice } from "@reduxjs/toolkit";
export const topicSlice = createSlice({
  name: "topics",
  initialState: {
    topics: [],
    topic:''
  },
  reducers: {
    setTopicList(state, action) {
      if (action.payload) {
        state.topics = action.payload;
      }
    },
    setTopic(state, action) {
      if (action.payload) {
        state.topic = action.payload;
      }
    },
  },
});

export const { setTopicList ,setTopic} = topicSlice.actions;
export const topics = (state) => state.topics.topics;
export const topic = (state) => state.topics.topic;
export default topicSlice.reducer;
