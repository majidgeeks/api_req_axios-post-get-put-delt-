import React, { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";
import BasicCard from "./BasicCard";
import MyCard from "./MyCard";
import Form from "./Form";

const Posts = () => {
  const [apiData, setApiData] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    console.log("res", res.data);
    setApiData(res.data);
  };

  const getCurrentPosts = (posts) => {
    setApiData(posts)
  };

  useEffect(() => {
    getPostData();
  }, []);

  console.log("apidata in posts", apiData);
  return( 
    <div >
        {/* <BasicCard apiData={apiData} /> */}
        <Form />
        <MyCard apiData={apiData} getCurrentPosts={getCurrentPosts}/>

    </div>
  )
};

export default Posts;
