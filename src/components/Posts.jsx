import React, { useEffect, useState } from "react";
import { addPost, getPost } from "../api/PostApi";
import MyCard from "./MyCard";
import Form from "./Form";

const Posts = () => {
  const [apiData, setApiData] = useState([]);
  const [updatePost, setUpdatePost] = useState({});

  const getPostData = async () => {
    const res = await getPost();
    // console.log("res", res.data);
    setApiData(res.data);
  };

  const getCurrentPosts = (posts) => {
    setApiData(posts);
  };

  const getPostAdded = async (post) => {
    // console.log("get post added in posts.jsx", post)
    try {
      const res = await addPost(post);
      // console.log("response post added",res)
      if (res.status === 201) {
        setApiData([...apiData, res.data]);
      } else {
        console.log("failed to add new post");
      }
    } catch (error) {
      console.log("error in addding new post catch", error);
    }
  };

  const getUpdateElem = (curElm) => {
    setUpdatePost(curElm);
  };

  useEffect(() => {
    getPostData();
  }, []);

  // console.log("apidata in posts", apiData);
  return (
    <div>
      <Form
        getPostAdded={getPostAdded}
        updatePost={updatePost}
        setUpdatePost={setUpdatePost}
        apiData={apiData}
        setApiData={setApiData}
      />
      <MyCard
        apiData={apiData}
        getCurrentPosts={getCurrentPosts}
        getUpdateElem={getUpdateElem}
      />
    </div>
  );
};

export default Posts;
