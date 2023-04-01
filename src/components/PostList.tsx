import React from "react";
import { useSelector } from "react-redux";
import { post } from "../stores/Posts/postSlice";
const PostList = () => {
  const posts = useSelector(post);
  return (
    <>
      {posts &&
        posts.map((item: any) => (
          <img
            src={item.urls.regular}
            key={item.id}
            style={{marginRight: '10px',marginLeft:'10px'}} 
            width={300 + Math.floor(Math.random() * 100)}
            height={350 + Math.floor(Math.random() * 100)}
            
          />
        ))}
    </>
  );
};

export default PostList;
